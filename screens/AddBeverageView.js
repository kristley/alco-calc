import React from "react";
import {
	StyleSheet,
	View,
	TextInput,
	Text,
	TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PrefabCont from "../components/PrefabContainer";

function AddBeverageView({navigation}) {
	return (
		<SafeAreaView>
			<View style={styles.container}>
				<View style={styles.rect}>
					<View style={styles.nameOfBeverageRow}>
						<TextInput
							placeholder="Name of beverage"
							style={styles.nameOfBeverage}
						/>
						<View style={styles.ellipse}/>
					</View>
				</View>
				<Text style={styles.addBeverage}>Add beverage</Text>
				<View style={styles.textInputBoxRow}>
					<View style={[styles.textInputBox, styles.rect2Stack]}>
						<View style={styles.rect2}></View>
						<TextInput
							placeholder="0 %"
							style={styles.textInput}
						></TextInput>
					</View>
					<View
						style={[
							styles.volumeInputContainer,
							styles.volumeInputContainer2,
						]}
					>
						<View style={styles.rect3} />
						<TextInput
							placeholder="0ml"
							style={styles.volumeInput}
						></TextInput>
					</View>
					<View style={styles.dropDownPlaceholder} />
					<TouchableOpacity
						onPress={() => navigation.goBack()}
						style={[styles.button, styles.addButtonContainer]}
					>
						<Text style={styles.addButton}>Add +</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.prefabRow1}>
					<PrefabCont style={styles.prefabCont}></PrefabCont>
					<PrefabCont style={styles.prefabCont5}></PrefabCont>
					<PrefabCont style={styles.prefabCont6}></PrefabCont>
				</View>
				<View style={styles.prefabRow2}>
					<PrefabCont style={styles.prefabCont7}></PrefabCont>
					<PrefabCont style={styles.prefabCont8}></PrefabCont>
					<PrefabCont style={styles.prefabCont9}></PrefabCont>
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	rect: {
		width: 314,
		height: 44,
		backgroundColor: "#E6E6E6",
		borderRadius: 15,
		flexDirection: "row",
		marginTop: 368,
		marginLeft: 31,
	},
	nameOfBeverage: {
		color: "#121212",
		height: 23,
		width: 164,
		marginTop: 1,
	},
	ellipse: {
		width: 24,
		height: 24,
		borderRadius: 12,
		marginLeft: 97,
		backgroundColor: "rgba(208,2,27,1)",
	},
	nameOfBeverageRow: {
		height: 24,
		flexDirection: "row",
		flex: 1,
		marginRight: 16,
		marginLeft: 13,
		marginTop: 9,
	},
	addBeverage: {
		color: "#121212",
		fontSize: 22,
		marginTop: -317,
		alignSelf: "center",
	},
	textInputBox: {
		width: 52,
		height: 27,
	},
	rect2: {
		top: 0,
		left: 0,
		width: 53,
		height: 27,
		position: "absolute",
		backgroundColor: "#E6E6E6",
		borderRadius: 15,
	},
	textInput: {
		top: 0,
		left: 13,
		position: "absolute",
		color: "#121212",
		height: 27,
		width: 52,
	},
	rect2Stack: {
		width: 65,
		height: 27,
		marginLeft: -13,
	},
	volumeInputContainer: {
		width: 52,
		height: 27,
		marginLeft: 20,
	},
	rect3: {
		top: 0,
		left: 0,
		width: 53,
		height: 27,
		position: "absolute",
		backgroundColor: "#E6E6E6",
		borderRadius: 15,
	},
	volumeInput: {
		top: 1,
		left: 13,
		position: "absolute",
		color: "#121212",
		height: 27,
		width: 52,
	},
	volumeInputContainer2: {
		width: 65,
		height: 28,
		marginLeft: -13,
	},
	dropDownPlaceholder: {
		width: 55,
		height: 27,
		backgroundColor: "#E6E6E6",
		marginLeft: 1,
		marginTop: 1,
	},
	button: {
		width: 80,
		height: 27,
		marginLeft: 40,
		marginTop: 1,
	},
	addButtonContainer: {
		width: 80,
		height: 27,
		backgroundColor: "rgba(190,89,163,1)",
		borderRadius: 10,
	},
	addButton: {
		color: "#121212",
		marginTop: 5,
		marginLeft: 24,
	},
	textInputBoxRow: {
		height: 28,
		flexDirection: "row",
		marginTop: 315,
		marginLeft: 44,
		marginRight: 31,
	},
	prefabRow1: {
		width: 314,
		height: 33,
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 82,
		marginLeft: 31,
	},
	prefabCont: {
		height: 33,
		width: 94,
	},
	prefabCont5: {
		height: 33,
		width: 94,
	},
	prefabCont6: {
		height: 33,
		width: 94,
	},
	prefabRow2: {
		width: 314,
		height: 33,
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 15,
		marginLeft: 31,
	},
	prefabCont7: {
		height: 33,
		width: 94,
	},
	prefabCont8: {
		height: 33,
		width: 94,
	},
	prefabCont9: {
		height: 33,
		width: 94,
	},
});

export default AddBeverageView;
