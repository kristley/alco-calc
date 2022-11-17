import { View, StyleSheet, Button } from "react-native";
import React, { useEffect, useState } from "react";
import TopBar from "./components/TopBar";
import DrinkList from "./components/DrinkList";
import { SafeAreaView } from "react-native-safe-area-context";
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
