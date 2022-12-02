import React, { createContext, useContext, useEffect, useState } from 'react';

const NightsContext = React.createContext<Night>({} as Night);
const NightIsTonightContext = createContext<boolean>(true);

export function useGetNight(): Night {
  return useContext(NightsContext);
}

export function useGetIsTonight(): boolean {
  return useContext(NightIsTonightContext);
}

export default function NightsProvider({ children }: { children: React.ReactNode }) {
  const [currentNight, setCurrentNight] = useState<Night>({
    id: 0,
    date: '2022-01-01',
    drinks: [
      {
        name: 'Beer',
        volume: 0.5,
        percentage: 5,
        color: "#FFFF00",
        unit: "l",
        time: '2022-01-01T00:00:00.000Z',
      },
    ]
  });

  const isTonight = true;

  // todo implement set current night to day before and day after
  // suggestions: index of current night in nights array
  // implement valid date check with a context provider that returns a boolean
  // implement two valid date checkers: one for the night before, one for the night after

  return (
    <NightsContext.Provider value={currentNight}>
        <NightIsTonightContext.Provider value={isTonight}>
          {children}
        </NightIsTonightContext.Provider>
    </NightsContext.Provider>
  );
}
