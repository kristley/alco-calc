import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import BeverageNameInput from "./BeverageNameInput";
import BeveragePercentageInput from "./BeveragePercentageInput";
import BeverageVolumeInput from "./BeverageVolumeInput";
import AddBeverageButton from "./AddBeverageButton";
import BeverageUnitInput from "./BeverageUnitInput";

export default function BeverageInput({ displayedDrink, setDisplayedDrink }) {
    return (
        <View style={styles.container}>

            <BeverageNameInput
                style={styles.beverageNameInput}
                displayedDrink={displayedDrink}
                setDisplayedDrink={setDisplayedDrink}
            />

            <View style={styles.beverageOthersInput}>

                <BeveragePercentageInput
                    style={styles.beveragePercentageInput}
                    displayedDrink={displayedDrink}
                    setDisplayedDrink={setDisplayedDrink}
                />

                <BeverageVolumeInput
                    style={styles.beverageVolumeInput}
                    displayedDrink={displayedDrink}
                    setDisplayedDrink={setDisplayedDrink}
                />

                <BeverageUnitInput
                    style={styles.beverageUnitInput}
                    displayedDrink={displayedDrink}
                    setDisplayedDrink={setDisplayedDrink}
                />

                <AddBeverageButton
                    style={styles.addBeverageButton}
                    displayedDrink={displayedDrink}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 50
    },
    beverageNameInput: {
        flex: 1,
        width: 314,
        height: 44,
        backgroundColor: "#E6E6E6",
        borderRadius: 15,
    },
    beverageOthersInput: {
        flex: 1,
        flexDirection: "row",
        padding: 15,
        marginHorizontal: 20,
        justifyContent: "space-between"
    },
    beveragePercentageInput: {
        width: 53,
        height: 27,
        flex: 1,
        backgroundColor: "#E6E6E6",
        borderRadius: 15,
        justifyContent: "space-between",
        marginRight: 20,
    },
    beverageVolumeInput: {
        width: 53,
        height: 27,
        flex: 1,
        backgroundColor: "#E6E6E6",
        borderRadius: 15,
        justifyContent: "space-between",

    },
    beverageUnitInput: {
        width: 53,
        height: 27,
        flex: 1,
        backgroundColor: "#E6E6E6",
        borderRadius: 15,
        justifyContent: "space-between",

    },
    addBeverageButton: {
        width: 53,
        height: 27,
        flex: 1,
        backgroundColor: "#E6E6E6",
        borderRadius: 15,
        justifyContent: "space-between",
        paddingLeft: 50
    }
});