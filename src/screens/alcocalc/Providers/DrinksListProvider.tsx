
import React, { useContext, useEffect, useState } from 'react';
import { getBAL, getTime, getVol } from '../calculator/calculator';

const DrinksListContext = React.createContext<Drink[]>(
    [
      {
        name: 'Beer',
        volume: 0.5,
        percentage: 5,
        color: "#FFFF00",
        unit: "l",
        time: '2022-01-01T00:00:00.000Z',
      },
      {
        name: 'Beer',
        volume: 0.5,
        percentage: 5,
        color: "#FFFF00",
        unit: "l",
        time: '2022-01-01T00:00:00.000Z',
      },
    ]
  );
const DrinksListUpdateContext = React.createContext<React.Dispatch<React.SetStateAction<Drink[]>>>(
  () => {}
);
const DrinksBALContext = React.createContext<number>(0);
const DrinksVolContext = React.createContext<number>(0);
const DrinksTimeContext = React.createContext<number>(0);

export function  useGetDrinksList(): Drink[] {
  return useContext(DrinksListContext);
}

export function useSetDrinksList(): React.Dispatch<React.SetStateAction<Drink[]>> {
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
  // const night = useGetNight();
  const [drinksList, setDrinksList] = useState<Drink[]>(
    [
      {
        name: 'Beer',
        volume: 0.5,
        percentage: 5,
        color: "#FFFF00",
        unit: "l",
        time: '2022-01-01T00:00:00.000Z',
      },
      {
        name: 'Beer',
        volume: 0.5,
        percentage: 5,
        color: "#FFFF00",
        unit: "l",
        time: '2022-01-01T00:00:00.000Z',
      },
    ]
  );

  const [vol, time, BAL] = React.useMemo(() => {
    const vol = getVol(drinksList);
    const time = getTime(drinksList);
    const BAL = getBAL(vol, time);
    return [vol, time, BAL];
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
