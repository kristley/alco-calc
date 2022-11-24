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

export default function Calculator() {


    return (
        <View style={styles.container}>
            <VolumeDisplay/>

            <TimeDisplay/>

            {
                displayedDate == todayString && // todo get today is today from provider
                <BloodAlcoholDisplay
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