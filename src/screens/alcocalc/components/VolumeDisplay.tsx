import { useEffect } from "react";
import { getTotalVolume } from "../../../calculator/calculator";
import Display from "./Display";

export default function VolumeDisplay() {

    useEffect(() => {
        updateTotalVolume();
    }, [drinks])

    const updateTotalVolume = () => {
        setTotalVolume(getTotalVolume(drinks));
    }

	return (
        <Display title="Total vol." value={totalVolume+'ml'} />
	);
}


