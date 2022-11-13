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

export default function AddBeverageView() {

  const [displayedDrink, setDisplayedDrink] = useState({});

  useEffect(() => {
    Alert.alert(`you clicked on ${displayedDrink.beverage}`);
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