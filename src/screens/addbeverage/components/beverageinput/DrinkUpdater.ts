import { useEffect, useState } from 'react';
import { useGetDrink, useSetDrink } from '../../Providers/BeverageProvider';

export function useInputState<T>(property: keyof Beverage) : [T, React.Dispatch<React.SetStateAction<T>>] {
  const drinkProp = useGetDrink()[property];
  const [value, setValue] = useState(drinkProp as T);
  
  useEffect(() => {
    setValue(() => drinkProp as T);
  }, [drinkProp]);
  
  const setDrink = useSetDrink();

  useEffect(() => {
    setDrink((prevDrink) => ({...prevDrink, [property]: value}));
  }, [value]);

  return [value, setValue];
}