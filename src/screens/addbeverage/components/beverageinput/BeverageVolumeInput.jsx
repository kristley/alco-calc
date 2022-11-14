import React, { useEffect, useState } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";


export default function BeverageVolumeInput({ displayedDrink, setDisplayedDrink }) {

	const [volume, setVolume] = useState("");

	const updateVolume = (value) => {
		setVolume(value);
		const newDrink = {};
		Object.assign(newDrink, displayedDrink);
		newDrink.volume = value;
		setDisplayedDrink(newDrink);
	}

	useEffect(() => {
		setVolume(displayedDrink.volume)
	}, [displayedDrink])

	return (
		<View style={styles.container}>
			<TextInput
				keyboardType="numeric"
				placeholder="0"
				style={styles.textInput}
				value={volume}
				onChangeText={updateVolume}
			/>
			<Text style={styles.volume}>{displayedDrink.unit}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: 60,
		height: 27,
		backgroundColor: "#E6E6E6",
		borderRadius: 15,
		flexDirection: "row",
		textAlignVertical: "center"
	},
	textInput: {
		top: 0,
		left: 13,
		color: "#121212",
		height: 27,
		width: 52,
		flex: 2
	},
	volume: {
		color: "#121212",
		flex: 1,
		textAlignVertical: "center"
	}
});