import React, { useEffect, useState } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";


export default function BeverageVolumeInput({ displayedDrink, setDisplayedDrink, style }) {

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
		<View style={[styles.container, style]}>
			<TextInput
				keyboardType="numeric"
				placeholder="0"
				style={styles.textInput}
				value={volume}
				onChangeText={updateVolume}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		paddingHorizontal: 10
	},
	textInput: {
		color: "#121212",
		flex: 1
	},
});