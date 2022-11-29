import { useGetDrinksVol } from "../Providers/DrinksListProvider";
import Display from "./Display";

export default function VolumeDisplay() {

    const totalVolume = useGetDrinksVol();
	return (
        <Display title="Total vol." value={totalVolume+'ml'} />
	);
}