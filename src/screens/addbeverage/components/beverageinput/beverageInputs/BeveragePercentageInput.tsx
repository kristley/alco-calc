import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import { beverageInput } from "../BeverageInputStyles";
import { useInputState } from "../BeverageUpdater";

export default function BeveragePercentageInput() {
	const [percentage, setPercentage] = useInputState<string>("percentage");

	return (
		<View style={[styles.container, beverageInput]}>
			<TextInput
				style={styles.textInput}
				keyboardType='numeric'
				placeholder="0"
				value={percentage}
				onChangeText={setPercentage}
				maxLength={5}
			/>
			<Text style={styles.percentage}>%</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		paddingHorizontal: 10
	},
	percentage: {
		color: "#121212",
		textAlign: "right",
		textAlignVertical: "center",
	},
	textInput: {
		color: "#121212",
		flex: 1
	}
});
