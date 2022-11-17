import { View, StyleSheet, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import TopBar from "./components/TopBar";
import DrinkList from "./components/DrinkList";
import { getDay, getDrinks, toDateString } from "../../api/drinks";
import Calculator from "./components/Calculator";
import { getDateString, getNextDate } from "../../calculator/calculator";

export default function AlcoCalcView({ navigation, route }) {

	const base_url = "http://localhost:3000"
	const base_headers = {
    "Accept": "application/json",
    "Content-Type": "application/json"
}

	const today = new Date()
	const todayString = getDateString(today)
	const [displayedDate, setDisplayedDate] = useState(todayString);
	const [date, setDate] = useState(today)
	const [drinks, setDrinks] = useState([]);
	const [day, setDay] = useState()


  	useEffect(() => {


		const updateDrinks = async () => {
			const api_url = base_url + "/day/" + displayedDate + "/drinks"
			const data = await fetch(api_url,  {
				method: "GET",
				headers: base_headers})
				.catch((error) => {	console.error("Error", error)})
			
			// convert the data to json
			const thisJson = await data.json();
			setDrinks(thisJson)
			//setDrinks(json);
			}

		const updateDay = async () => {
			const api_url = base_url + "/day/" + displayedDate
			const data = await fetch(api_url,  {
			method: "GET",
			headers: base_headers})
			.catch((error) => {console.log("Error", error)})

    
			const json = await data.json();
			setDay(json);
		}
		updateDay()
    	updateDrinks()
 	 }, [route])

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
			<DrinkList style={styles.list} drinks={drinks} />
			<View style={styles.bottom}>
				{displayedDate == todayString && (
					<TouchableOpacity
						style={styles.addBeverageButton}
						onPress={() => navigation.navigate("AddBeverageView")}
					>
						<Text style={styles.addBeverageButtonText}>+</Text>
					</TouchableOpacity>
				)}
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
	addBeverageButton: {
		height: 70,
		width: 70,
		borderRadius: 35,
		backgroundColor: "#8d1e4d",
		alignSelf: "center",
		marginBottom: 20
	},
	addBeverageButtonText: {
		flex: 1,
		fontSize: 50,
		textAlign: "center",
		textAlignVertical: "center",
		color: "#fff",
	},
	calc: {
		paddingVertical: 20,
	}
});
