import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  Button
} from "react-native";
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
      <Button title="Edit Prefab" />
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
        setDisplayedDrink={setDisplayedDrink}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 50,
    },
  header:{
    textAlign : "center",
    fontSize: 30,
    flex: 1,
  },
  beverageInput: {
    flex: 1
  }
});