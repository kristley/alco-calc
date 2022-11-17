import { View, StyleSheet, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import TopBar from "./components/TopBar";
import DrinkList from "./components/DrinkList";
import { getDrinks, toDateString } from "../../api/drinks";
import Calculator from "./components/Calculator";
import AddDrinkButton from "./components/AddDrinkButton";

export default function AlcoCalcView({ navigation, route }) {
	const today = toDateString(new Date());

	const [displayedDate, setDisplayedDate] = useState(today);
	const [drinks, setDrinks] = useState([]);

	useEffect(() => {
		setDrinks(getDrinks(displayedDate));
	}, [route, displayedDate]);

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
				{
					displayedDate == today &&
					<AddDrinkButton
						navigation={navigation}
					/>
				}

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
	calc: {
		paddingVertical: 20,
	}
});
