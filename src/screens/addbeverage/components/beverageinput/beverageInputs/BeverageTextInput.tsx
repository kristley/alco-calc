import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { beverageInput } from "../BeverageInputStyles";

type BeverageTextInputProps = {
    children : React.ReactNode;
    placeholder : string;
    value : string;
    onChangeText : (text : string) => void;
    maxLength? : number;
    keyboardType? : "default" | "number-pad" | "decimal-pad" | "numeric" | "email-address" | "phone-pad";
}

export default function BeverageTextInput( props : BeverageTextInputProps ) {

	return (
		<View style={[styles.container, beverageInput]}>
			<TextInput
				style={styles.textInput}
				keyboardType={props.keyboardType}
				placeholder={props.placeholder}
				value={props.value}
				onChangeText={props.onChangeText}
				maxLength={props.maxLength}
			/>
			{props.children}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		paddingHorizontal: 10
	},
	percentage: {
		color: "#121212",
		textAlign: "right",
		textAlignVertical: "center",
	},
	textInput: {
		color: "#121212",
		flex: 1
	}
});
