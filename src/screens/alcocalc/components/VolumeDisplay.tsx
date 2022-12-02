import { useGetDrinksInfo } from "../providers/DrinksListProvider";
import Display from "./Display";

export default function VolumeDisplay() {

    const {vol} = useGetDrinksInfo();
	return (
        <Display title="Total vol." value={vol+'ml'} />
	);
}