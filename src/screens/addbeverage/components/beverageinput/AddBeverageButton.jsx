import React, { useEffect, useState } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { addDrink } from "../../../../api/drinks";

export default function AddBeverageButton({ displayedDrink, navigation, style }) {

	const [completeDrink, setCompleteDrink] = useState(false);

	const addBeverage = () => {
		if (!completeDrink) {
			return;
		}
		addDrink(displayedDrink);
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
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	add: {
		color: "#fff",
	},
	completeDrink: {
		backgroundColor: "#8d1e4d",
	},
	incompleteDrink: {
		backgroundColor: "#c791a8",
	}
});