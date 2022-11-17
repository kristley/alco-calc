/*
Today:
Display total volume of pure alcohol
Display drinking time (time since first drink)
Current blood alcohol level (average human)

Other:
Display total volume of pure alcohol
Display drinking time (time from first to last drink)
*/

import { View, StyleSheet } from "react-native";
import BloodAlcoholDisplay from "./BloodAlcoholDisplay";
import TimeDisplay from "./TimeDisplay";
import VolumeDisplay from "./VolumeDisplay";
import { useState } from "react";

export default function Calculator({ drinks, displayedDate, today }) {

    const [totalVolume, setTotalVolume] = useState("");
    const [timeElapsed, setTimeElapsed] = useState("");

    return (
        <View style={styles.container}>
            <VolumeDisplay
                drinks={drinks}
                totalVolume={totalVolume}
                setTotalVolume={setTotalVolume}
                style={styles.displayed}
            />

            <TimeDisplay
                drinks={drinks}
                displayedDate={displayedDate}
                today={today}
                timeElapsed={timeElapsed}
                setTimeElapsed={setTimeElapsed}
                style={styles.displayed}
            />

            {
                displayedDate == today &&
                <BloodAlcoholDisplay
                    totalVolume={totalVolume}
                    timeElapsed={timeElapsed}
                    style={styles.displayed}
                />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    displayed:{
        flex: 1,
    }
});