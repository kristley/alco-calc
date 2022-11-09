import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function PrefabItem({ item }) {
	return (
		<View style={[styles.container, {borderColor: item.color}]}>
			<Text style={styles.beverageName} adjustsFontSizeToFit={true}>{item.beverage}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		textAlign: "center",
		backgroundColor: "#E6E6E6",
		width: 90,
		margin: 10,
		height: 80,
		borderRadius: 15,
		marginVertical: 5,
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 1,
	},
	beverageName: {
		color: "#121212",
	},
});
