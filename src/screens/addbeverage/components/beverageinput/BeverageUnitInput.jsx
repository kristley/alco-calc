import React, { useState, useEffect} from "react";
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
      onChangeValue={updateUnit}
			containerStyle={style}
			style={[{ borderWidth: 0 }, style]}
			dropDownContainerStyle={styles.dropdown}
		/>
	);
}

const styles = StyleSheet.create({
	dropdown: {
		borderRadius: 15,
		borderWidth: 0,
		backgroundColor: "#E6E6E6",
		zIndex: 10,
	}
});
