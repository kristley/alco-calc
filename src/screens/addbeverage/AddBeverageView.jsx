import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  SafeAreaView
} from "react-native";
import BeverageInput from "./components/beverageinput/BeverageInput";
import PrefabList from "./components/prefablist/PrefabList";

export default function AddBeverageView(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Add beverage</Text>
      <BeverageInput navigation={props.navigation} style={styles.beverageInput}></BeverageInput>
      <PrefabList style={styles.prefabs}></PrefabList>
<<<<<<< HEAD:src/screens/addbeverage/AddBeverageView.jsx
      <Button title="Edit Prefab" />
    </View>
=======
      <Button title="Edit Prefab"/>
    </SafeAreaView>
>>>>>>> 7a83c38 (Fix responsiveness):screens/AddBeverageView.js
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 50,
<<<<<<< HEAD:src/screens/addbeverage/AddBeverageView.jsx
    marginTop: 100
  },
  header: {
    textAlign: "center",
=======
    marginTop: 100,
    },
  header:{
    textAlign : "center",
>>>>>>> 7a83c38 (Fix responsiveness):screens/AddBeverageView.js
    fontSize: 30,
    flex: 1,
  },
  beverageInput: {
    flex: 1
  },
  prefabs: {
    flex: 2,
    justifyContent:"space-around"
  }
});