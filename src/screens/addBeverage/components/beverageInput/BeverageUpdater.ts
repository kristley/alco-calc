import { useEffect, useState } from 'react';
import { useGetBeverage, useSetBeverage } from '../../providers/BeverageProvider';

export function useInputState<T>(property: keyof Beverage) : [T, React.Dispatch<React.SetStateAction<T>>] {
  const beverageProp = useGetBeverage()[property];
  const [value, setValue] = useState(beverageProp as T);
  
  useEffect(() => {
    setValue(() => beverageProp as T);
  }, [beverageProp]);
  
  const setDrink = useSetBeverage();

  useEffect(() => {
    setDrink((prevDrink) => ({...prevDrink, [property]: value}));
  }, [value]);

  return [value, setValue];
}