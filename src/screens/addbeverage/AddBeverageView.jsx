import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button
} from "react-native";
import BeverageInput from "./components/beverageinput/BeverageInput";
import PrefabList from "./components/prefablist/PrefabList";

export default function AddBeverageView(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add beverage</Text>
      <BeverageInput navigation={props.navigation} style={styles.beverageInput}></BeverageInput>
      <PrefabList style={styles.prefabs}></PrefabList>
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
  },
  prefabs: {
    flex: 2,
  }
});