import React, { useEffect, useState } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { addDrink } from "../../../../api/apiService";

export default function AddBeverageButton({ displayedDrink, navigation, style }) {

	const [completeDrink, setCompleteDrink] = useState(false);

  const base_url = "http://lafa7-2001-700-300-4106-85ba-3343-f003-a845.eu.ngrok.io"
	const base_headers = {
    "Accept": "application/json",
    "Content-Type": "application/json"
  }
  const date =	(new Date().getYear() + 1900).toString() + 
  (new Date().getMonth() + 1).toString()  +
  (new Date().getDate()).toString();

	const addBeverage = async () => {
		if (!completeDrink) {
			return;
		}
    const api_url = base_url + "/day/"  + date + "/add"
    const timeString = (new Date().getHours().toString()) + ":" + (new Date().getMinutes().toString())
	const data = await addDrink(date, {
		time: timeString,
        beverage: displayedDrink.beverage,
        volume: displayedDrink.volume,
        unit: displayedDrink.unit,
        percentage: displayedDrink.percentage,
        color: displayedDrink.color,
		id: displayedDrink.id}

	)
	const json = await data.json();
    
		//addDrink(displayedDrink);
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
		flex: 3,
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