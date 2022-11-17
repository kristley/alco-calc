import React, { useEffect, useState } from "react";
import { StyleSheet, View, TextInput, Alert } from "react-native";

export default function BeverageNameInput({
	displayedDrink,
	setDisplayedDrink,
	style,
}) {
	const [name, setName] = useState("");

	const updateName = (value) => {
		setName(value);
		const newDrink = {};
		Object.assign(newDrink, displayedDrink);
		newDrink.beverage = value;
		setDisplayedDrink(newDrink);
	};

	useEffect(() => {
		setName(displayedDrink.beverage);
	}, [displayedDrink]);

	return (
		<View style={[styles.container, style]}>
			<TextInput
				placeholder="Name of beverage"
				style={styles.nameOfBeverage}
				value={name}
				onChangeText={updateName}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		paddingHorizontal: 10,
	},
	nameOfBeverage: {
		color: "#121212",
		flex: 1
	},
});
