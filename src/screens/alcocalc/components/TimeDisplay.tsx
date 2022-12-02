import { useGetDrinksInfo } from "../providers/DrinksListProvider";
import Display from "./Display";

export default function TimeDisplay() {
	
	const {time} = useGetDrinksInfo();
	const getFormattedTime = () => {
		const hours = Math.floor(time / 60);
		const minutes = time % 60;
		return `${hours}:${minutes}`;
	}
	return (
		<Display title="Time elapsed" value={getFormattedTime()} />
	);
}