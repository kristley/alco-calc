import React, { useContext, useState, useEffect } from 'react';

const INITIAL_DRINK: Drink = {
  beverage: '',
  volume: 0,
  unit: 'cl',
  percentage: 0,
  color: '#447ea9'
};

function drinkHasValidInputs(drink: Drink): boolean {
  return drink.beverage !== '' && drink.volume > 0 && drink.percentage > 0;
}

const DrinkContext = React.createContext<Drink>({} as Drink);
const DrinkUpdateContext = React.createContext<React.Dispatch<React.SetStateAction<Drink>>>(
  () => {}
);
const DrinkValidContext = React.createContext<boolean>(false);

export function useDrink(): [Drink, React.Dispatch<React.SetStateAction<Drink>>] {
  return [useContext(DrinkContext), useContext(DrinkUpdateContext)];
}
export function useGetDrink(): Drink {
  return useContext(DrinkContext);
}
export function useSetDrink(): React.Dispatch<React.SetStateAction<Drink>> {
  return useContext(DrinkUpdateContext);
}
export function useDrinkValid(): boolean {
  return useContext(DrinkValidContext);
}

export default function DrinkProvider({ children }: { children: React.ReactNode }) {
  const [drink, setDrink] = useState<Drink>(INITIAL_DRINK);
  const [drinkValid, setDrinkValid] = useState<boolean>(false);
  useEffect(() => {
    setDrinkValid(drinkHasValidInputs(drink));
  }, [drink]);
  return (
    <DrinkContext.Provider value={drink}>
      <DrinkUpdateContext.Provider value={setDrink}>
        <DrinkValidContext.Provider value={drinkValid}>{children}</DrinkValidContext.Provider>
      </DrinkUpdateContext.Provider>
    </DrinkContext.Provider>
  );
}
