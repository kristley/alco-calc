import { useEffect, useState } from 'react';
import { useGetDrink, useSetDrink } from '../../Providers/DrinkProvider';

export function useInputState<T>(initialValue: T, property: keyof Drink) : [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState(initialValue);
  const drinkProp = useGetDrink()[property];
  
  useEffect(() => {
    setValue(() => drinkProp as T);
  }, [drinkProp]);
  
  const setDrink = useSetDrink();

  useEffect(() => {
    setDrink((prevDrink) => ({...prevDrink, [property]: value}));
  }, [value]);

  return [value, setValue];
}