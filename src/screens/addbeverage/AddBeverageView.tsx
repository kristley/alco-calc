import React, { useState } from "react";
import {
  StyleSheet,
  Text} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BeverageInput from "./components/beverageinput/BeverageInput";
import PrefabList from "./components/prefablist/PrefabList";

export default function AddBeverageView({ navigation }) {

  const [displayedDrink, setDisplayedDrink] = useState(
    {
      beverage: "",
      volume: "",
      unit: "",
      percentage: "",
      color: "#d0021b"
    });
  
  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.header}>
        Add beverage
      </Text>

      <BeverageInput
        style={styles.beverageInput}
        displayedDrink={displayedDrink}
        setDisplayedDrink={setDisplayedDrink}
        navigation={navigation}
      />

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