import React, { useContext, useState, useEffect } from 'react';

const INITIAL_DRINK: Beverage = {
  name: '',
  volume: "",
  unit: 'cl',
  percentage: "",
  color: '#447ea9'
};

//todo: update validation to be better
function beverageHasValidInputs(beverage: Beverage): boolean {
  return beverage.name !== '' && beverage.volume !== '' && beverage.percentage !== '';
}

const DrinkContext = React.createContext<Beverage>({} as Beverage);
const DrinkUpdateContext = React.createContext<React.Dispatch<React.SetStateAction<Beverage>>>(
  () => {}
);
const DrinkValidContext = React.createContext<boolean>(false);

export function useGetBeverage(): Beverage {
  return useContext(DrinkContext);
}
export function useSetBeverage(): React.Dispatch<React.SetStateAction<Beverage>> {
  return useContext(DrinkUpdateContext);
}
export function useBeverageValid(): boolean {
  return useContext(DrinkValidContext);
}

export default function BeverageProvider({ children } : { children: React.ReactNode }) {
  const [beverage, setDrink] = useState<Beverage>(INITIAL_DRINK);
  const beverageValid = React.useMemo(() => {
    return beverageHasValidInputs(beverage);
  }, [beverage]);
  return (
    <DrinkContext.Provider value={beverage}>
      <DrinkUpdateContext.Provider value={setDrink}>
        <DrinkValidContext.Provider value={beverageValid}>{children}</DrinkValidContext.Provider>
      </DrinkUpdateContext.Provider>
    </DrinkContext.Provider>
  );
}
