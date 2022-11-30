import React, { useContext, useState, useEffect } from 'react';

const INITIAL_DRINK: Beverage = {
  name: '',
  volume: "",
  unit: 'cl',
  percentage: "",
  color: '#447ea9'
};

//todo: update validation to be better
function drinkHasValidInputs(drink: Beverage): boolean {
  return drink.name !== '' && drink.volume !== '' && drink.percentage !== '';
}

const DrinkContext = React.createContext<Beverage>({} as Beverage);
const DrinkUpdateContext = React.createContext<React.Dispatch<React.SetStateAction<Beverage>>>(
  () => {}
);
const DrinkValidContext = React.createContext<boolean>(false);

export function useDrink(): [Beverage, React.Dispatch<React.SetStateAction<Beverage>>] {
  return [useContext(DrinkContext), useContext(DrinkUpdateContext)];
}
export function useGetDrink(): Beverage {
  return useContext(DrinkContext);
}
export function useSetDrink(): React.Dispatch<React.SetStateAction<Beverage>> {
  return useContext(DrinkUpdateContext);
}
export function useDrinkValid(): boolean {
  return useContext(DrinkValidContext);
}

export default function DrinkProvider({ children } : { children: React.ReactNode }) {
  const [drink, setDrink] = useState<Beverage>(INITIAL_DRINK);
  const drinkValid = React.useMemo(() => {
    return drinkHasValidInputs(drink);
  }, [drink]);
  return (
    <DrinkContext.Provider value={drink}>
      <DrinkUpdateContext.Provider value={setDrink}>
        <DrinkValidContext.Provider value={drinkValid}>{children}</DrinkValidContext.Provider>
      </DrinkUpdateContext.Provider>
    </DrinkContext.Provider>
  );
}
