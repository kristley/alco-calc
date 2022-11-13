import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";

export default function BeveragePercentageInput({ displayedDrink, setDisplayedDrink }) {
	const [percentage, setPercentage] = useState("");

	const updatePercentage = (value) => {
		if (value.indexOf('%') > -1) {
			value = value.split('%').join('');
			if (value > 100) {
				value = 100;
			}
			setPercentage(value + '%');
			return;
		}
		setPercentage(value.slice(0, -1) + '%');
	}

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.textInput}
				placeholder="0 %"
				value={percentage}
				onChangeText={updatePercentage}
				maxLength={5}
			/>
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
