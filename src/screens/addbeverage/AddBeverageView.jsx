import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  Button
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getPrefabs } from "../../api/prefabs";
import BeverageInput from "./components/beverageinput/BeverageInput";
import PrefabList from "./components/prefablist/PrefabList";

export default function AddBeverageView({ navigation, route }) {

  const base_url = "http://localhost:3000"
	const base_headers = {
    "Accept": "application/json",
    "Content-Type": "application/json"
}

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
      const api_url = base_url + "/prefab"
			const data = await fetch(api_url,  {
			method: "GET",
			headers: base_headers})
			.catch((error) => {console.log("Error", error)})    
			const json = await data.json();
      setPrefabs(json)

    }
    updatePrefabs()
  }, [route])

 

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
        prefabs={prefabs}
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