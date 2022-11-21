import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export default function BeverageUnitInput({
	displayedDrink,
	setDisplayedDrink,
	style,
}) {
	const [open, setOpen] = useState(false);
	const [value, setUnit] = useState("cl");
	const [items, setItems] = useState([
		{ label: "ml", value: "ml" },
		{ label: "cl", value: "cl" },
		{ label: "dl", value: "dl" },
		{ label: "l", value: "l" },
	]);

	const updateUnit = (value) => {
		setUnit(value);
		console.log(value);
		const newDrink = {};
		Object.assign(newDrink, displayedDrink);
		newDrink.unit = value;
		setDisplayedDrink(newDrink);
	}

	useEffect(() => {
		setUnit(displayedDrink.unit)
	}, [displayedDrink])


	return (
		<DropDownPicker
			open={open}
			value={value}
			items={items}
			setOpen={setOpen}
			setValue={setUnit}
			setItems={setItems}
			defaultValue={value}
			placeholder="Unit"
			placeholderStyle={{ color: "#9EA0A4" }}
			onChangeValue={updateUnit}
			containerStyle={style}
			style={[{ borderWidth: 0 }, style]}
			dropDownContainerStyle={styles.dropdown}
			zIndex={10}
		/>
	);
}

const styles = StyleSheet.create({
	dropdown: {
		backgroundColor: "#E6E6E6",
		borderRadius: 15,
		borderWidth: 0,
	}
});
