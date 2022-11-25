import { useGetDrinksTime } from "../Providers/DrinksListProvider";
import Display from "./Display";

export default function TimeDisplay() {
	
	const totalTime = useGetDrinksTime();
	const getFormattedTime = () => {
		const hours = Math.floor(totalTime / 60);
		const minutes = totalTime % 60;
		return `${hours}:${minutes}`;
	}
	return (
		<Display title="Time elapsed" value={getFormattedTime()} />
	);
}