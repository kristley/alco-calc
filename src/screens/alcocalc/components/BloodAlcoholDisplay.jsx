import { useEffect, useState } from "react";
import { Text } from "react-native";
import { getBloodAlcohol } from "../../../calculator/calculator";

export default function BloodAlcoholDisplay({ totalVolume, timeElapsed }) {

    const [displayedBloodAlcohol, setDisplayedBloodAlcohol] = useState("");

    const updateDisplayedBloodAlcohol = () => {
        setDisplayedBloodAlcohol(getBloodAlcohol(totalVolume, timeElapsed));
    }

    useEffect(() => {
        updateDisplayedBloodAlcohol();
    }, [totalVolume, timeElapsed]);

    return (
        <Text>Current blood alcohol level: {displayedBloodAlcohol}‰</Text>
    );
}