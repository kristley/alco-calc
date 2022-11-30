import React, { useContext, useState } from 'react';

const PrefabsContext = React.createContext<Drink[]>({} as Drink[]);
const PrefabsUpdateContext = React.createContext<React.Dispatch<React.SetStateAction<Drink[]>>>(
  () => {}
);

export function useGetPrefabs(): Drink[] {
  return useContext(PrefabsContext);
}

export function useSetPrefabs(): React.Dispatch<React.SetStateAction<Drink[]>> {
  return useContext(PrefabsUpdateContext);
}

export default function PrefabsProvider({ children }: { children: React.ReactNode }) {
  const [prefabs, setPrefabs] = useState<Drink[]>([
    {
      beverage: 'Beer',
      volume: '0.5',
      percentage: '5',
      color: '#FFFF00',
      unit: 'l',
    },
    {
      beverage: 'Beer',
      volume: '0.3',
      percentage: '5',
      color: '#FFFF00',
      unit: 'l',
    },
    {
      beverage: 'Shot',
      volume: '4',
      percentage: '40',
      color: '#FF4400',
      unit: 'cl',
    },
  ]);

  return (
    <PrefabsContext.Provider value={prefabs}>
      <PrefabsUpdateContext.Provider value={setPrefabs}>{children}</PrefabsUpdateContext.Provider>
    </PrefabsContext.Provider>
  );
}
