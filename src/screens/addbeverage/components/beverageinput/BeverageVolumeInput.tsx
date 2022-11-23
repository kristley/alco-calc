import React, { useEffect, useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { useSetDrink } from "../../Providers/DrinkProvider";
import { beverageVolumeInput } from "./BeverageInputStyles";


export default function BeverageVolumeInput() {

	const [volume, setVolume] = useState("");
	const setDrink = useSetDrink();
	
	useEffect(() => {
		setDrink((oldDrink) =>{
			return {...oldDrink, volume: volume}
		});
	}, [volume]);


	return (
		<View style={[styles.container, beverageVolumeInput]}>
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