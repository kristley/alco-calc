import React from "react";
import { StyleSheet, View } from "react-native";
import {SafeAreaView} from 'react-native-safe-area-context';
import AlcoCalcView from "./screens/AlcoCalcView";

export default function App(props) {
	return (
		<SafeAreaView style={styles.container}>
      <AlcoCalcView/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#ddd",
	},
});