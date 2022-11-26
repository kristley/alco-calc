
import React, { useContext, useEffect, useState } from 'react';
import { getBAL, getTime, getVol } from '../calculator/calculator';

const DrinksListContext = React.createContext<Beverage[]>({} as Beverage[]);
const DrinksListUpdateContext = React.createContext<React.Dispatch<React.SetStateAction<Beverage[]>>>(
  () => {}
);
const DrinksBALContext = React.createContext<number>(0);
const DrinksVolContext = React.createContext<number>(0);
const DrinksTimeContext = React.createContext<number>(0);

export function useGetDrinksList(): Beverage[] {
  return useContext(DrinksListContext);
}

export function useSetDrinksList(): React.Dispatch<React.SetStateAction<Beverage[]>> {
  return useContext(DrinksListUpdateContext);
}

export function useGetDrinksBAL(): number {
  return useContext(DrinksBALContext);
}

export function useGetDrinksVol(): number {
  return useContext(DrinksVolContext);
}

export function useGetDrinksTime(): number {
  return useContext(DrinksTimeContext);
}

export default function DrinksListProvider({ children }: { children: React.ReactNode }) {
  const [drinksList, setDrinksList] = useState<Beverage[]>([]);
  const [BAL, setBAL] = useState<number>(0);
  const [vol, setVol] = useState<number>(0);
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    setVol(getVol(drinksList));
    setTime(getTime(drinksList[0].time, drinksList[drinksList.length - 1].time));
    setBAL(getBAL(vol, time));
  }, [drinksList]);
// Todo implement calculator providers: BAL, total volume, time elapsed

  return (
    <DrinksListContext.Provider value={drinksList}>
      <DrinksListUpdateContext.Provider value={setDrinksList}>
        <DrinksBALContext.Provider value={BAL}>
          <DrinksVolContext.Provider value={vol}>
            <DrinksTimeContext.Provider value={time}>{children}</DrinksTimeContext.Provider>
          </DrinksVolContext.Provider>
        </DrinksBALContext.Provider>
      </DrinksListUpdateContext.Provider>
    </DrinksListContext.Provider>
  );
}
