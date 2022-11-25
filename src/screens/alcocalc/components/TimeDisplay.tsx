import { useEffect } from "react";
import { getTimeElapsed } from "../calculator/calculator";
import Display from "./Display";

export default function TimeDisplay() {
	useEffect(() => {
		updateTimeElapsed();
	}, [drinks]);

	const updateTimeElapsed = () => {
		if (drinks.length < 1) {
			setTimeElapsed("00:00");
			return;
		}

		let from = drinks[0].time;
		let to;

		if (todayString == displayedDate) {
			const now = new Date();
			to = now.getHours() + ":" + now.getMinutes();
		} else {
			to = drinks[drinks.length - 1].time;
		}

		setTimeElapsed(getTimeElapsed(from, to));
	};
	return (
		<Display title="Time elapsed" value={timeElapsed} />
	);
}