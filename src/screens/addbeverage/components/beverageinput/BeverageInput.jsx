import React from "react";
import { StyleSheet, View } from "react-native";
import BeverageNameInput from "./BeverageNameInput";
import BeveragePercentageInput from "./BeveragePercentageInput";
import BeverageVolumeInput from "./BeverageVolumeInput";
import AddBeverageButton from "./AddBeverageButton";
import BeverageUnitInput from "./BeverageUnitInput";
import BeverageColorInput from "./BeverageColorInput";

export default function BeverageInput({
	displayedDrink,
	setDisplayedDrink,
	navigation,
}) {
	return (
		<View style={styles.container}>
			<View style={styles.row}>
				<BeverageNameInput
					displayedDrink={displayedDrink}
					style={styles.beverageInput}
				/>
				<BeverageColorInput style={styles.colorInput}/>
			</View>
			<View style={styles.row}>
				<BeveragePercentageInput
					displayedDrink={displayedDrink}
					setDisplayedDrink={setDisplayedDrink}
					style={styles.beverageInput}
				/>
				<BeverageVolumeInput
					displayedDrink={displayedDrink}
					setDisplayedDrink={setDisplayedDrink}
					style={styles.beverageInput}
				/>
				<BeverageUnitInput
					displayedDrink={displayedDrink}
					setDisplayedDrink={setDisplayedDrink}
					style={[styles.beverageInput]}
				/>
				<AddBeverageButton
					displayedDrink={displayedDrink}
					navigation={navigation}
					style={styles.addButton}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 15,
	},
	row: {
		flexDirection: "row",
		flex: 1,
		alignItems: "center",
	},
	colorInput: {
		height: 30,
		width: 30,
		borderRadius: 15,
		backgroundColor: "#f00",
	},
	beverageInput: {
		backgroundColor: "#E6E6E6",
		borderRadius: 15,
		height: 50,
		marginRight: 15,
		flex: 1,
	},
	addButton: {
		borderRadius: 15,
		height: 50,
		flex: 1,
	},
});
