import React, { useContext, useState } from 'react';

const NightsContext = React.createContext<Night>({} as Night);
const NightsUpdateContext = React.createContext<React.Dispatch<React.SetStateAction<Night>>>(
  () => {}
);

export function useGetNights(): Night {
  return useContext(NightsContext);
}

export function useSetNights(): React.Dispatch<React.SetStateAction<Night>> {
  return useContext(NightsUpdateContext);
}

export default function NightsProvider({ children }: { children: React.ReactNode }) {
  const [nights, setNights] = useState<Night[]>([]);
  const [currentNight, setCurrentNight] = useState<Night>({} as Night);
  // todo implement set current night to day before and day after
  // suggestions: index of current night in nights array
  // implement valid date check with a context provider that returns a boolean
  // implement two valid date checkers: one for the night before, one for the night after

  return (
    <NightsContext.Provider value={nights}>
      <NightsUpdateContext.Provider value={setNights}>{children}</NightsUpdateContext.Provider>
    </NightsContext.Provider>
  );
}
