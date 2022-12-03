import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { beverageInput } from "../BeverageInputStyles";
import { useInputState } from "../BeverageUpdater";

export default function BeverageNameInput() {

	const [name, setName] = useInputState<string>("name");

	return (
		<View style={[styles.container, beverageInput]}>
			<TextInput
				placeholder="Name of beverage"
				style={styles.nameOfBeverage}
				value={name}
				onChangeText={setName}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		paddingHorizontal: 10,
	},
	nameOfBeverage: {
		color: "#121212",
		flex: 1
	},
});
