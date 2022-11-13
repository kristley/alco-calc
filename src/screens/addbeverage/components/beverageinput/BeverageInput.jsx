import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import BeverageNameInput from "./BeverageNameInput";
import BeveragePercentageInput from "./BeveragePercentageInput";
import BeverageVolumeInput from "./BeverageVolumeInput";
import AddBeverageButton from "./AddBeverageButton";
import BeverageUnitInput from "./BeverageUnitInput";
import DisplayMode from "react-native/Libraries/ReactNative/DisplayMode";
import { back } from "react-native/Libraries/Animated/Easing";

export default function BeverageInput({ displayedDrink, setDisplayedDrink, navigation }) {
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
                    displayedDrink={displayedDrink}
                    navigation={navigation}
                />
            </View>
        </View>
        <View style={styles.beverageOthersContainer}>
            <BeveragePercentageInput style={styles.beveragePercentageInput}></BeveragePercentageInput>
            <BeverageVolumeInput style={styles.beverageVolumeInput}></BeverageVolumeInput>
            <BeverageUnitInput style={styles.beverageUnitInput}></BeverageUnitInput>
            <AddBeverageButton style={styles.addBeverageButton} navigation={navigation}></AddBeverageButton>
        </View>
     </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: "center",
        maxWidth: 500,
        },
    beverageNameContainer:{
        flex: 1,
        borderRadius: 15,
        flexDirection: "row",
        maxWidth: 500,
        marginHorizontal: 20,
        justifyContent: "center"
        },
    beverageNameInput:{
        height: 35,
        flex: 1,
        borderRadius: 15,
        alignSelf: "center"
    },
    beverageOthersContainer:{
        flex: 1,
        borderRadius: 15,
        flexDirection: "row",
        marginHorizontal: 20,
        justifyContent: "space-between"
    },
    beveragePercentageInput:{
        width: 53,
        height: 27,
        flex: 1,
        backgroundColor: "#E6E6E6",
        borderRadius: 15,
        padding: 20
       },
   beverageVolumeInput:{
        width: 53,
        height: 27,
        flex: 1,
        backgroundColor: "#E6E6E6",
        borderRadius: 15,

    },
    beverageUnitInput: {
        width: 53,
        height: 27,
        flex: 1,
        backgroundColor: "#E6E6E6",
        borderRadius: 15,
        justifyContent: "space-between",

    }
});