import React from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";


export default function BeverageVolumeInput() {
  return (
    <View style={styles.container}>
      <TextInput placeholder="0" style={styles.textInput}></TextInput>
      <Text style={styles.volume}>L</Text>
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
	volume:{
		color: "#121212",
		flex: 1,
		textAlignVertical: "center",
		top: 5
  }
});