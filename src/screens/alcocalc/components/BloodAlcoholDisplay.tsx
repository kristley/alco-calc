import Display from "./Display";

export default function BloodAlcoholDisplay() {
	const displayedBloodAlcohol = useDrinksListBAC();

	return (
		<Display title="Blood alcohol" value={displayedBloodAlcohol+'‰'} />
	);
}