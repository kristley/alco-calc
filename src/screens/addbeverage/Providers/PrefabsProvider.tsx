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
  const [prefabs, setPrefabs] = useState<Drink[]>([]);

  return (
    <PrefabsContext.Provider value={prefabs}>
      <PrefabsUpdateContext.Provider value={setPrefabs}> {children} </PrefabsUpdateContext.Provider>
    </PrefabsContext.Provider>
  );
}
