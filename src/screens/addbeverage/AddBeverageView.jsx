import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Alert
} from "react-native";
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
    <View style={styles.container}>

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

      <Button title="Edit Prefab" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 50,
    marginTop: 100
  },
  header: {
    textAlign: "center",
    fontSize: 30,
    flex: 1,
  },
  beverageInput: {
    flex: 1
  }
});