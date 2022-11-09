import React from "react";
import {
  StyleSheet,
  View,
  Text,
} from "react-native";
import BeverageInput from "../components/addBeverageView/BeverageInput";
import PrefabList from "../components/addBeverageView/PrefabList";

export default function AddBeverageView(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add beverage</Text>
      <BeverageInput style={styles.beverageInput}></BeverageInput>
      <PrefabList style={styles.prefabs}></PrefabList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 50
    },
  header:{
    textAlign : "center",
    fontSize: 30,
    flex: 1,
    marginTop: 80,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  beverageInput:{
    flex: 1,
  },
  prefabs:{
    flex: 1,
  }
});