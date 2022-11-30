import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { getTimeString } from "../../../alcocalc/calculator/calculator";
import { useDrinkValid, useGetDrink } from "../../Providers/DrinkProvider";

export default function AddBeverageButton() {
	const navigation = useNavigation();
	const validDrink = useDrinkValid();
	const drink = useGetDrink();

	const addBeverage = async () => {
		if (!validDrink) return;

		const time = getTimeString(new Date());

		const beverage = {...drink, time: time} as Beverage;
		navigation.navigate("AlcoCalcView", { paramPropKey: "paramPropValue" });
	};

	return (
		<TouchableOpacity
			onPress={addBeverage}
			style={[styles.container, { ...(validDrink ? styles.completeDrink : styles.incompleteDrink) }]}
			disabled={!validDrink}
		>
			<Text style={styles.add}>Add +</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	add: {
		color: "#fff",
	},
	completeDrink: {
		backgroundColor: "#8d1e4d",
	},
	container: {
		borderRadius: 15,
		height: 50,
		alignItems: "center",
		flex: 3,
		justifyContent: "center",
	},
	incompleteDrink: {
		backgroundColor: "#c791a8",
	}
});