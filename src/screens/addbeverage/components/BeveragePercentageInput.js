import React from "react";
import { StyleSheet, View, TextInput } from "react-native";

export default function BeveragePercentageInput() {
	return (
		<View style={styles.container}>
			<TextInput placeholder="0 %" style={styles.textInput}></TextInput>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: 53,
		height: 27,
		backgroundColor: "#E6E6E6",
		borderRadius: 15,
	},
	textInput: {
		top: 0,
		left: 13,
		color: "#121212",
		height: 27,
		width: 52,
	},
});
