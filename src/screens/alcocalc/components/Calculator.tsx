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
import { useGetIsTonight } from "../Providers/NightsProvider";
import BloodAlcoholDisplay from "./BloodAlcoholDisplay";
import TimeDisplay from "./TimeDisplay";
import VolumeDisplay from "./VolumeDisplay";

export default function Calculator() {
    const isTonight = useGetIsTonight();

    return (
        <View style={styles.container}>
            <VolumeDisplay/>
            <TimeDisplay/>

            {
                isTonight &&
                <BloodAlcoholDisplay/>
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
});