
import React, { useContext, useEffect, useState } from 'react';
import { getBAL, getTime, getVol } from '../calculator/calculator';
import { useGetNight } from './NightsProvider';

const DrinksListContext = React.createContext<Drink[]>([] as Drink[]);
const DrinksListUpdateContext = React.createContext<React.Dispatch<React.SetStateAction<Drink[]>>>(
  () => {}
);
const DrinksBALContext = React.createContext<DrinksInfo>({ BAL: 0, time: 0, vol: 0 });

export function  useGetDrinksList(): Drink[] {
  return useContext(DrinksListContext);
}

export function useSetDrinksList(): React.Dispatch<React.SetStateAction<Drink[]>> {
  return useContext(DrinksListUpdateContext);
}

export function useGetDrinksInfo(): DrinksInfo {
  return useContext(DrinksBALContext);
}

export default function DrinksListProvider({ children }: { children: React.ReactNode }) {
  const nightDrinks = useGetNight().drinks;
  const [drinksList, setDrinksList] = useState<Drink[]>(nightDrinks);


  useEffect(() => {
    setDrinksList(nightDrinks);
  }, [nightDrinks]);

  const info = React.useMemo<DrinksInfo>(() => {
    const vol = getVol(drinksList);
    const time = getTime(drinksList);
    const BAL = getBAL(vol, time);
    return { BAL, time, vol };
  }, [drinksList]);

// Todo implement calculator providers: BAL, total volume, time elapsed

  return (
    <DrinksListContext.Provider value={drinksList}>
      <DrinksListUpdateContext.Provider value={setDrinksList}>
        <DrinksBALContext.Provider value={info}>
            {children}
        </DrinksBALContext.Provider>
      </DrinksListUpdateContext.Provider>
    </DrinksListContext.Provider>
  );
}
