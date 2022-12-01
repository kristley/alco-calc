import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { beverageInputBase, beverageInput} from "./BeverageInputStyles";
import { useInputState } from "./BeverageUpdater";

type UnitDropDownItem = {
	label: string;
	value: Unit;
}

export default function BeverageUnitInput(
) {
	const [open, setOpen] = useState(false);
	const items : UnitDropDownItem[] = [
		{ label: "ml", value: "ml" },
		{ label: "cl", value: "cl" },
		{ label: "dl", value: "dl" },
		{ label: "l", value: "l" },
	];
	// todo: fix unit can be null
	const [unit, setUnit] = useInputState<Unit>("unit");
	const updateUnit = (value : Unit | null) => {
		if (value) {
			setUnit(value);
		}
	}

	return (
		<DropDownPicker
			open={open}
			value={unit}
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