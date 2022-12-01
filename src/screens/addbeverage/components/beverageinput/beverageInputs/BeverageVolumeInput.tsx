import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { beverageInput } from "../BeverageInputStyles";
import { useInputState } from "../BeverageUpdater";


export default function BeverageVolumeInput() {
	const [volume, setVolume] = useInputState<string>("volume");

	return (
		<View style={[styles.container, beverageInput]}>
			<TextInput
				keyboardType="numeric"
				placeholder="0"
				style={styles.textInput}
				value={volume}
				onChangeText={setVolume}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		flex: 1,
		paddingLeft: 10,
	},
	textInput: {
		color: "#121212",
		flex: 1
	},
});