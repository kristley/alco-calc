import { Text } from "react-native";
import { useEffect } from "react";
import { getTimeElapsed } from "../../../calculator/calculator";

export default function TimeDisplay({ drinks, displayedDate, today, timeElapsed, setTimeElapsed }) {

    useEffect(() => {
        updateTimeElapsed();
    }, [drinks]);

    const updateTimeElapsed = () => {

        if (drinks.length < 1) {
            setTimeElapsed("00:00");
            return;
        }

        let from = drinks[0].time;
        let to;

        if (today == displayedDate) {
            const now = new Date();
            to = now.getHours() + ":" + now.getMinutes();
        }
        else {
            to = drinks[drinks.length - 1].time;
        }

        setTimeElapsed(getTimeElapsed(from, to));
    }

    return (
        <Text>
            Drinking time: {timeElapsed}
        </Text>
    );
}