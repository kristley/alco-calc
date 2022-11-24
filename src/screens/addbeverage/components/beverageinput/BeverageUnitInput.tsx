import React, { useState, useEffect } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { beverageInputBase, beverageInput} from "./BeverageInputStyles";
import { useUpdateDrink } from "./DrinkUpdater";

type UnitDropDownItem = {
	label: string;
	value: Unit;
}

export default function BeverageUnitInput(
) {
	const [open, setOpen] = useState(false);
	const [value, setUnit] = useState<Unit>("cl");
	const items : UnitDropDownItem[] = [
		{ label: "ml", value: "ml" },
		{ label: "cl", value: "cl" },
		{ label: "dl", value: "dl" },
		{ label: "l", value: "l" },
	];
	// todo: fix unit can be null
	useUpdateDrink(value, (drink) => ({ ...drink, unit: value }));
	const updateUnit = (value : Unit | null) => {
		if (value) {
			setUnit(value);
		}
	}

	return (
		<DropDownPicker
			open={open}
			value={value}
			items={items}
			setOpen={setOpen}
			setValue={setUnit}
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