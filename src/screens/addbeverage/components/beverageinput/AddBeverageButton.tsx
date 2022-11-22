import React, { useEffect, useState } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { addDrink } from "../../../../api/apiService";
import { getDateString, getTimeString } from "../../../../calculator/calculator";

export default function AddBeverageButton({ displayedDrink, navigation, style }) {

	const [completeDrink, setCompleteDrink] = useState(false);

	const date = getDateString(new Date());
	const addBeverage = async () => {
		if (!completeDrink) {
			return;
		}
		const drink = {};
		Object.assign(drink, displayedDrink);
		drink.time = getTimeString(new Date());
		await addDrink(date, drink);
		navigation.navigate("AlcoCalcView", { paramPropKey: "paramPropValue" });
	};

	useEffect(() => {
		setCompleteDrink(!Object.values(displayedDrink).some((x) => x === ""));
	}, [displayedDrink]);

	return (
		<TouchableOpacity
			onPress={addBeverage}
			style={[style, styles.container, { ...(completeDrink ? styles.completeDrink : styles.incompleteDrink) }]}
			disabled={!completeDrink}
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
		alignItems: "center",
		flex: 3,
		justifyContent: "center",
	},
	incompleteDrink: {
		backgroundColor: "#c791a8",
	}
});