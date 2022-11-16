/*
Today:
Display total volume of pure alcohol
Display drinking time (time since first drink)
Current blood alcohol level (average human)

Other:
Display total volume of pure alcohol
Display drinking time (time from first to last drink)
*/

import { View } from "react-native";
import BloodAlcoholDisplay from "./BloodAlcoholDisplay";
import TimeDisplay from "./TimeDisplay";
import VolumeDisplay from "./VolumeDisplay";
import { useState } from "react";

export default function Calculator({ drinks, displayedDate, today }) {

    const [totalVolume, setTotalVolume] = useState("");
    const [timeElapsed, setTimeElapsed] = useState("");

    return (
        <View>
            <VolumeDisplay
                drinks={drinks}
                totalVolume={totalVolume}
                setTotalVolume={setTotalVolume}
            />

            <TimeDisplay
                drinks={drinks}
                displayedDate={displayedDate}
                today={today}
                timeElapsed={timeElapsed}
                setTimeElapsed={setTimeElapsed}
            />

            {
                displayedDate == today &&
                <BloodAlcoholDisplay
                    totalVolume={totalVolume}
                    timeElapsed={timeElapsed}
                />
            }
        </View>
    );
}