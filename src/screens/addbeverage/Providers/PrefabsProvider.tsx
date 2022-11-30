import React, { useContext, useState } from 'react';

const PrefabsContext = React.createContext<Beverage[]>({} as Beverage[]);
const PrefabsUpdateContext = React.createContext<React.Dispatch<React.SetStateAction<Beverage[]>>>(
  () => {}
);

export function useGetPrefabs(): Beverage[] {
  return useContext(PrefabsContext);
}

export function useSetPrefabs(): React.Dispatch<React.SetStateAction<Beverage[]>> {
  return useContext(PrefabsUpdateContext);
}

export default function PrefabsProvider({ children }: { children: React.ReactNode }) {
  const [prefabs, setPrefabs] = useState<Beverage[]>([
    {
      name: 'Beer',
      volume: '0.5',
      percentage: '5',
      color: '#FFFF00',
      unit: 'l',
    },
    {
      name: 'Beer',
      volume: '0.3',
      percentage: '5',
      color: '#FFFF00',
      unit: 'l',
    },
    {
      name: 'Shot',
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
