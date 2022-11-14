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
			<View style={{ flexDirection: "row", alignItems: "center"}}>
				<BeverageNameInput
					style={styles.beverageNameInput}
					displayedDrink={displayedDrink}
					setDisplayedDrink={setDisplayedDrink}
				/>
                <BeverageColorInput style={{flex: 1}}/>
			</View>

			<View style={styles.beverageOthersInput}>
				<BeveragePercentageInput
					style={styles.beverageInput}
					displayedDrink={displayedDrink}
					setDisplayedDrink={setDisplayedDrink}
				/>

				<BeverageVolumeInput
					style={styles.beverageInput}
					displayedDrink={displayedDrink}
					setDisplayedDrink={setDisplayedDrink}
				/>

				<BeverageUnitInput
					style={styles.beverageInput}
					displayedDrink={displayedDrink}
					setDisplayedDrink={setDisplayedDrink}
				/>

				<AddBeverageButton
					displayedDrink={displayedDrink}
					navigation={navigation}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingBottom: 50,
		flex: 1,
		flexDirection: "column",
	},
	beverageNameInput: {
		width: 250,
		height: 44,
		backgroundColor: "#E6E6E6",
		borderRadius: 15,
	},
	beverageOthersInput: {
		height: 27,
		padding: 15,
		marginHorizontal: 20,
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		backgroundColor: "#00ff00",
	},
	beverageInput: {
		height: 27,
		backgroundColor: "#E6E6E6",
		borderRadius: 15,
	},
});
