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
		width: 60,
		backgroundColor: "#E6E6E6",
		borderRadius: 15,
		flexDirection: "row",
		textAlignVertical: "center"
	},
	textInput: {
		top: 0,
		left: 13,
		color: "#121212",
		height: 27,
		flex: 2
	},
	percentage: {
		color: "#121212",
		flex: 1,
		textAlignVertical: "center",
	}
});
