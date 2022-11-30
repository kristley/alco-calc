import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useInputState } from "./DrinkUpdater";



export default function BeverageColorInput() {

	const [open, setOpen] = useState(false);

	const [color, setColor] = useInputState<Color>("#447ea9", "color");

	// Todo: fix color can be null
	const updateColor = (color : Color | null) => {
		if (color) {
			setColor(color);
		}
	}

	return (
		<DropDownPicker
			open={open}
			value={color}
			items={items}
			setOpen={setOpen}
			setValue={setColor}
			onChangeValue={updateColor}
			style={styles.dropdown}
			dropDownContainerStyle={styles.dropdownContainer}
			textStyle={{ opacity: 0, width: 0, height: 0 }}
			labelStyle={{ opacity: 0, width: 0, height: 0 }}
		/>
	);
}

type ColorDropDownItem = {
	label: string;
	value: Color;
	icon: () => JSX.Element;
};

const items : ColorDropDownItem[] = [
	{ label: 'orange', value: '#E8AA32', icon: () => <View style={{ backgroundColor: "#E8AA32", width: 18, height: 18, borderRadius: 9 }} /> },
	{ label: 'pink', value: '#DD72D9', icon: () => <View style={{ backgroundColor: "#DD72D9", width: 18, height: 18, borderRadius: 9 }} /> },
	{ label: 'brown', value: '#7a121f', icon: () => <View style={{ backgroundColor: "#7a121f", width: 18, height: 18, borderRadius: 9 }} /> },
	{ label: 'purple', value: '#6635CE', icon: () => <View style={{ backgroundColor: "#6635CE", width: 18, height: 18, borderRadius: 9 }} /> },
	{ label: 'green', value: '#127A6E', icon: () => <View style={{ backgroundColor: "#127A6E", width: 18, height: 18, borderRadius: 9 }} /> },
	{ label: 'yellow', value: '#ee0', icon: () => <View style={{ backgroundColor: "#ee0", width: 18, height: 18, borderRadius: 9 }} /> },
	{ label: 'gray', value: '#444444', icon: () => <View style={{ backgroundColor: "#444444", width: 18, height: 18, borderRadius: 9 }} /> }
]


const styles = StyleSheet.create({
	dropdown: {
		backgroundColor: "#E6E6E6",
		borderRadius: 15,
		borderWidth: 0,
		height: 50,
		width: 80,
	},
	dropdownContainer: {
		backgroundColor: "#E6E6E6",
		borderRadius: 15,
		borderWidth: 0,
		width: 80,
	}
});