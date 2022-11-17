import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Alert
} from "react-native";
import { getPrefabs } from "../../api/prefabs";
import BeverageInput from "./components/beverageinput/BeverageInput";
import PrefabList from "./components/prefablist/PrefabList";

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

  useEffect(() => {
    const updatePrefabs = async () => {
      const data = await getPrefabs();
      // convert the data to json
      const json = await data.json();
      setPrefabs(json);

    }
    updatePrefabs()
  }, [route])

 

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
        prefabs={prefabs}
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
    marginTop: 100,
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