import React, { useState } from "react";
import {
  StyleSheet,
  Text} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BeverageInput from "./components/beverageinput/BeverageInput";
import PrefabList from "./components/prefablist/PrefabList";
import DrinkProvider from "./Providers/DrinkProvider";

type Drink = {
  beverage: string,
  volume: string,
  unit: string,
  percentage: string,
  color: Color
}
export default function AddBeverageView() {

  
  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.header}>
        Add beverage
      </Text>
      <DrinkProvider>
        <BeverageInput
          style={styles.beverageInput}
        />
      </DrinkProvider >

      <PrefabList
        displayedDrink={displayedDrink}
        setDisplayedDrink={setDisplayedDrink}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  beverageInput: {
    flex: 1
  },
  container: {
    flex: 1,
    marginBottom: 50,
  },
  header: {
    flex: 1,
    fontSize: 30,
    textAlign: "center",
  },
});