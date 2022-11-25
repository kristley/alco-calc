import { useGetDrinksBAL } from "../Providers/DrinksListProvider";
import Display from "./Display";

export default function BloodAlcoholDisplay() {
	const displayedBloodAlcohol = useGetDrinksBAL();

	return (
		<Display title="Blood alcohol" value={displayedBloodAlcohol+'‰'} />
	);
}