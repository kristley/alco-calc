import { View, StyleSheet, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import TopBar from "./components/TopBar";
import DrinkList from "./components/DrinkList";
import { getDay, getDrinks, toDateString } from "../../api/drinks";
import Calculator from "./components/Calculator";

export default function AlcoCalcView({ navigation, route }) {

	const base_url = "http://localhost:3000"
	const base_headers = {
    "Accept": "application/json",
    "Content-Type": "application/json"
}

	const today =	(new Date().getYear() + 1900).toString() + 
                    (new Date().getMonth() + 1).toString()  +
                    (new Date().getDate()).toString();
	const [displayedDate, setDisplayedDate] = useState(today);
	const [drinks, setDrinks] = useState([]);
	const [day, setDay] = useState()


  	useEffect(() => {
		const updateDrinks = async () => {
			const api_url = base_url + "/day/" + displayedDate + "/drinks"
			const data = await fetch(api_url,  {
				method: "GET",
				headers: base_headers})
				.catch((error) => {console.error("Error", error)})
			
			// convert the data to json
			const json = await data.json();
			setDrinks(json);
			}

		const updateDay = async () => {
			const api_url = base_url + "/day/" + displayedDate
			const data = await fetch(api_url,  {
			method: "GET",
			headers: base_headers})
			.catch((error) => {console.error("Error", error)})
    
			const json = await data.json();
			setDay(json);
		}
    	updateDrinks()
		updateDay()
 	 }, [route])

	//useEffect(() => {
		//setDrinks(getDrinks(displayedDate));
	//}, [route, displayedDate]);

	return (
		<SafeAreaView style={styles.container}>
			<TopBar
				style={styles.topBar}
				displayedDate={displayedDate}
				setDisplayedDate={setDisplayedDate}
				today={today}
			/>
			<DrinkList style={styles.list} drinks={drinks} />
			<View style={styles.bottom}>
				{displayedDate == today && (
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
					today={today}
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
