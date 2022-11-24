
import React, { useContext, useState } from 'react';

const DrinksListContext = React.createContext<Beverage[]>({} as Beverage[]);
const DrinksListUpdateContext = React.createContext<React.Dispatch<React.SetStateAction<Beverage[]>>>(
  () => {}
);

export function useGetDrinksList(): Beverage[] {
  return useContext(DrinksListContext);
}

export function useSetDrinksList(): React.Dispatch<React.SetStateAction<Beverage[]>> {
  return useContext(DrinksListUpdateContext);
}

export default function DrinksListProvider({ children }: { children: React.ReactNode }) {
  const [DrinksList, setDrinksList] = useState<Beverage[]>([]);

// Todo implement calculator providers: BAL, total volume, time elapsed

  return (
    <DrinksListContext.Provider value={DrinksList}>
      <DrinksListUpdateContext.Provider value={setDrinksList}> {children} </DrinksListUpdateContext.Provider>
    </DrinksListContext.Provider>
  );
}