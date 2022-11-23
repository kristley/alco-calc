import React, { useEffect, useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { useSetDrink } from "../../Providers/DrinkProvider";
import { beverageInput } from "./BeverageInputStyles";

export default function BeverageNameInput() {

	const [name, setName] = useState("");
	const setDrink = useSetDrink();

	useEffect(() => {
		setDrink((oldDrink) => {
			return { ...oldDrink, beverage: name }
		});
	}, [name]);

	return (
		<View style={[styles.container, beverageInput]}>
			<TextInput
				placeholder="Name of beverage"
				style={styles.nameOfBeverage}
				value={name}
				onChangeText={setName}
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
