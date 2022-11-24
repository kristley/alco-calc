import React, { useEffect, useState } from 'react';
import { useSetDrink } from '../../Providers/DrinkProvider';

export function useUpdateDrink<T>(drinkValue: T, func: React.SetStateAction<Drink>) {
  const setDrink = useSetDrink();

  useEffect(() => {
    setDrink(func);
  }, [drinkValue]);
}
