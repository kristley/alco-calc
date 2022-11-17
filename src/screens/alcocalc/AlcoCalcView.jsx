import { View, StyleSheet, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import TopBar from "./components/TopBar";
import DrinkList from "./components/DrinkList";
import Calculator from "./components/Calculator";
import AddDrinkButton from "./components/AddDrinkButton";
import { getDateString, getNextDate } from "../../calculator/calculator";
import { getDrinks, getDay } from "../../api/apiService";

export default function AlcoCalcView({ navigation, route }) {
	const [update, setUpdate] = useState(true);



	const today = new Date()
	const todayString = getDateString(today)
	const [displayedDate, setDisplayedDate] = useState(todayString);
	const [date, setDate] = useState(today)
	const [drinks, setDrinks] = useState([]);
	const [day, setDay] = useState()


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

	useEffect(() => {
	}, [route, displayedDate]);

	return (
		<SafeAreaView style={styles.container}>
			<TopBar
				style={styles.topBar}
				displayedDate={displayedDate}
				setDisplayedDate={setDisplayedDate}
				date={date}
				setDate={setDate}
				todayString={todayString}
				day={day}
				setDay={setDay}
				drinks={drinks}
				setDrinks={setDrinks}
			/>
			<DrinkList 
				style={styles.list}
			 	drinks={drinks}
				setUpdate={setUpdate}
				update={update}
			/>
			<View style={styles.bottom}>
				{
					displayedDate == todayString &&
					<AddDrinkButton
						navigation={navigation}
					/>
				}

				<Calculator
					style={styles.calc}
					drinks={drinks}
					displayedDate={displayedDate}
					todayString={todayString}
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
		flex: 5,
	},
	bottom: {
		flex: 2,
		backgroundColor: "#e6e6e6",
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
		paddingVertical: 20,
	},
	calc: {
		paddingVertical: 20,
	}
});
