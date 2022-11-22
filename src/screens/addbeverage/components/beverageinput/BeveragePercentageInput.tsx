import React, { useState, useEffect } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";

export default function BeveragePercentageInput({ displayedDrink, setDisplayedDrink, style}) {
	const [percentage, setPercentage] = useState("");

	const updatePercentage = (value) => {
		setPercentage(value);
		const newDrink = {};
		Object.assign(newDrink, displayedDrink);
		newDrink.percentage = value;
		setDisplayedDrink(newDrink);
	}

	useEffect(() => {
		setPercentage(displayedDrink.percentage)
	}, [displayedDrink])

	return (
		<View style={[styles.container, style]}>
			<TextInput
				style={styles.textInput}
				keyboardType='numeric'
				placeholder="0"
				value={percentage}
				onChangeText={updatePercentage}
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
