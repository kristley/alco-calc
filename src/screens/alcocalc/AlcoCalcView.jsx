import { View, StyleSheet, Button } from "react-native";
import React, { useEffect, useState } from "react";
import TopBar from "./components/TopBar";
import DrinkList from "./components/DrinkList";
import { SafeAreaView } from "react-native-safe-area-context";
import { getDrinks, toDateString } from "../../api/drinks";
import Calculator from "./components/Calculator";

export default function AlcoCalcView({ navigation, route }) {

	const today = toDateString(new Date());

	const [displayedDate, setDisplayedDate] = useState(today);
	const [drinks, setDrinks] = useState([]);

	useEffect(() => {
		setDrinks(getDrinks(displayedDate));
	}, [route, displayedDate]);

	return (
		<SafeAreaView style={styles.container}>

			<TopBar style={styles.topBar} displayedDate={displayedDate} setDisplayedDate={setDisplayedDate} today={today} />

			<DrinkList style={styles.list} drinks={drinks} />


			<Calculator
				drinks={drinks}
				displayedDate={displayedDate}
				today={today}
			/>

			{
				displayedDate == today &&
				<View style={styles.addBeverageButton}>
					<Button
						title="Add beverage"
						onPress={() => navigation.navigate("AddBeverageView")}
					/>
				</View>
			}

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
