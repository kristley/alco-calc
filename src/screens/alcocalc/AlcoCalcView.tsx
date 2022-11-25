import { View, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TopBar from "./components/TopBar";
import DrinkList from "./components/DrinkList";
import Calculator from "./components/Calculator";
import AddDrinkButton from "./components/AddDrinkButton";

export default function AlcoCalcView() {

	return (
		<SafeAreaView style={styles.container}>
			<TopBar/>
			<DrinkList/>
			<View style={styles.bottom}>
				{
					displayedDate == todayString && // todo get today is today from provider
					<AddDrinkButton/>
				}

				<Calculator/>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	bottom: {
		backgroundColor: "#e6e6e6",
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
		flex: 2,
		paddingVertical: 20,
	},
	calc: {
		paddingVertical: 20,
	},
	container: {
		flex: 1,
		marginTop: 15,
	},
	list: {
		flex: 5,
	},
	topBar: {
		flex: 1,
		marginTop: 40,
		paddingHorizontal: 20,
		paddingTop: 20,
	}
});
