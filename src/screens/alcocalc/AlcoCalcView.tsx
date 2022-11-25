import { View, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TopBar from "./components/TopBar";
import DrinkList from "./components/DrinkList";
import Calculator from "./components/Calculator";
import AddDrinkButton from "./components/AddDrinkButton";
import { getDateString } from "./calculator/calculator";
import { getDrinks, getDay } from "../../api/apiService";
import { useRoute } from "@react-navigation/native";

export default function AlcoCalcView() {
	const [update, setUpdate] = useState(true);

	const route = useRoute();

	const today = new Date();
	const todayString = getDateString(today);
	const [displayedDate, setDisplayedDate] = useState(todayString);
	const [date] = useState(today);
	const [drinks, setDrinks] = useState([]);
	const [day, setDay] = useState();


	useEffect(() => {

		const updateDrinks = async () => {
			const data = await getDrinks(displayedDate)
			const json = await data.json();
			setDrinks(json)
		}

		const updateDay = async () => {
			const data = await getDay(displayedDate)
			const json = await data.json();
			setDay(json);
		}
		updateDay()
		updateDrinks()
	}, [route, update])


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
