import React from "react";
import { StyleSheet, View } from "react-native";
import TopBar from "./components/TopBar";
import DrinksList from "./components/DrinksList";
import FeatherIcon from "react-native-vector-icons/Feather";
import {SafeAreaView} from 'react-native-safe-area-context';

function App(props) {
	return (
		<SafeAreaView style={styles.container}>
      <TopBar style={styles.topBar}/>
      <DrinksList/>
      <View style={styles.addBeverageButton}>
        <FeatherIcon name="plus-circle" style={styles.plusIcon}></FeatherIcon>
      </View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#ddd",
	},
  topBar: {
    marginTop: 40,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  plusIcon: {
    color: "rgba(128,128,128,1)",
    fontSize: 67,
    marginLeft: 64
  },
  addBeverageButton: {
    height: 67,
    flexDirection: "row",
    marginTop: 21,
    marginLeft: 21,
    marginRight: 21
  }
});

export default App;
