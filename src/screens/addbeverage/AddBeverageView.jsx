import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  Button
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AddPrefabButton from "./components/prefablist/AddPrefabButton";
import BeverageInput from "./components/beverageinput/BeverageInput";
import PrefabList from "./components/prefablist/PrefabList";
import { getPrefabs } from "../../api/apiService";

export default function AddBeverageView({ navigation, route }) {

  const [displayedDrink, setDisplayedDrink] = useState(
    {
      beverage: "",
      volume: "",
      unit: "",
      percentage: "",
      color: "#d0021b"
    });
  
  const [prefabs, setPrefabs] = useState([])

  

 

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
  container: {
    flex: 1,
    marginBottom: 50,
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