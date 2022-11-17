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
					setDisplayedDrink={setDisplayedDrink}
					style={styles.beverageInput}
				/>
			</View>
			<View style={styles.row}>
				<BeveragePercentageInput
					displayedDrink={displayedDrink}
					setDisplayedDrink={setDisplayedDrink}
					style={styles.beverageInput}
				/>
				<BeverageVolumeUnitInput
					displayedDrink={displayedDrink}
					setDisplayedDrink={setDisplayedDrink}
				/>
				<AddBeverageButton
					displayedDrink={displayedDrink}
					navigation={navigation}
					style={styles.addButton}
				/>
			</View>
			<BeverageColorInput style={styles.colorInput} />
		</View>
	);
}

function BeverageVolumeUnitInput({displayedDrink, setDisplayedDrink}) {
	return (
		<View style={[styles.beverageInput, { flexDirection: "row", flex: 4 }]}>
			<BeverageVolumeInput
				displayedDrink={displayedDrink}
				setDisplayedDrink={setDisplayedDrink}
				style={styles.beverageVolumeInput}
			/>
			<BeverageUnitInput
				displayedDrink={displayedDrink}
				setDisplayedDrink={setDisplayedDrink}
				style={[styles.beverageVolumeInput, { flex: 3 }]}
			/>
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
		flex: 4,
		alignItems: "center",
		// space between
		justifyContent: "space-between",
	},
	colorInput: {
		flex: 1
	},
	beverageInput: {
		backgroundColor: "#E6E6E6",
		borderRadius: 15,
		height: 50,
		marginRight: 15,
		flex: 2,
	},
	beverageVolumeInput: {
		backgroundColor: "#E6E6E6",
		borderRadius: 15,
		height: 50,
		flex: 1,
	},
	addButton: {
		borderRadius: 15,
		height: 50,
	},
});
