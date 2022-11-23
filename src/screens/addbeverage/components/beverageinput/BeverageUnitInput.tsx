import React, { useState, useEffect } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { useSetDrink } from "../../Providers/DrinkProvider";
import { beverageInputBase, beverageInput} from "./BeverageInputStyles";

type Item = {
	label: string;
	value: Unit;
}

export default function BeverageUnitInput(
) {
	const [open, setOpen] = useState(false);
	const [value, setUnit] = useState<Unit>("cl");
	const [items, setItems] = useState<Item[]>([
		{ label: "ml", value: "ml" },
		{ label: "cl", value: "cl" },
		{ label: "dl", value: "dl" },
		{ label: "l", value: "l" },
	]);
	const setDrink = useSetDrink();
	
	useEffect(() => {
		setDrink((drink) => ({ ...drink, unit: value }));
	}, [value]);
	

	return (
		<DropDownPicker
			open={open}
			value={value}
			items={items}
			setOpen={setOpen}
			setValue={setUnit}
			setItems={setItems}
			disableBorderRadius={true}
			placeholder="Unit"
			placeholderStyle={{ color: "#9EA0A4" }}
			onChangeValue={updateUnit}
			containerStyle={beverageInput}
			style={beverageInput}
			dropDownContainerStyle={beverageInputBase}
			zIndex={10}
		/>
	);
}