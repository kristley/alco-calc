import { useGetDrinksInfo } from "../providers/DrinksListProvider";
import Display from "./Display";

export default function BloodAlcoholDisplay() {
	const {BAL} = useGetDrinksInfo();

	return (
		<Display title="Blood alcohol" value={BAL+'‰'} />
	);
}