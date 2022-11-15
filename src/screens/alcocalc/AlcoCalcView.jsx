import { View, StyleSheet, Button } from "react-native";
import React, { useEffect, useState } from "react";
import TopBar from "./components/TopBar";
import DrinkList from "./components/DrinkList";
import { SafeAreaView } from "react-native-safe-area-context";
import { getDrinks } from "../../api/drinks";

export default function AlcoCalcView({ navigation, route }) {

	const [drinks, setDrinks] = useState([]);

	useEffect(() => {
		setDrinks(getDrinks("20221115"));
	}, [route])

	return (
		<SafeAreaView style={styles.container}>
			<TopBar style={styles.topBar} />
			<DrinkList style={styles.list} drinks={drinks} />
			<View style={styles.addBeverageButton}>
				<Button
					title="Add beverage"
					onPress={() => navigation.navigate("AddBeverageView")}
				/>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 15,
		flex: 1,
	},
	topBar: {
		marginTop: 40,
		paddingTop: 20,
		paddingHorizontal: 20,
		flex: 1,
	},
	list: {
		flex: 2,
	},
	addBeverageButton: {
		height: 67,
		// move to bottom right of screen
		// position: "absolute",
		bottom: 0,
		right: 0,
		flex: 1,
	},
	plusIcon: {
		color: "rgba(128,128,128,1)",
		fontSize: 80,
		position: "absolute",
		bottom: 20,
		right: 20,
	},
});
