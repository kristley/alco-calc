import { useEffect, useState } from "react";
import { Text } from "react-native";
import { getTotalVolume } from "../../../calculator/calculator";

export default function VolumeDisplay({ drinks, totalVolume, setTotalVolume }) {

    useEffect(() => {
        updateTotalVolume();
    }, [drinks])

    const updateTotalVolume = () => {
        setTotalVolume(getTotalVolume(drinks));
    }

    return (
        <Text>Absolute volume: {totalVolume}ml </Text>
    );
}