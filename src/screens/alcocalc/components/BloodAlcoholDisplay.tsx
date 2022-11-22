import { useEffect, useState } from "react";
import { getBloodAlcohol } from "../../../calculator/calculator";
import Display from "./Display";

export default function BloodAlcoholDisplay({ totalVolume, timeElapsed }) {
	const [displayedBloodAlcohol, setDisplayedBloodAlcohol] = useState("");

	const updateDisplayedBloodAlcohol = () => {
		setDisplayedBloodAlcohol(getBloodAlcohol(totalVolume, timeElapsed));
	};

	useEffect(() => {
		updateDisplayedBloodAlcohol();
	}, [totalVolume, timeElapsed]);

	return (
		<Display title="Blood alcohol" value={displayedBloodAlcohol+'‰'} />
	);
}