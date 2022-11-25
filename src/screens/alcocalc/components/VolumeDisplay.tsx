import { useEffect } from "react";
import { getVol } from "../calculator/calculator";
import Display from "./Display";

export default function VolumeDisplay() {

    useEffect(() => {
        updateTotalVolume();
    }, [drinks])

    const updateTotalVolume = () => {
        setTotalVolume(getVol(drinks));
    }

	return (
        <Display title="Total vol." value={totalVolume+'ml'} />
	);
}


