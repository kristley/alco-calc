import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { useState, useEffect } from "react";
import { addPrefab } from "../../../../api/apiService";
import { useDrinkValid, useGetDrink } from "../../Providers/DrinkProvider";

export default function AddPrefabButton() {

    const drink = useGetDrink();
    const validDrink = useDrinkValid();

    const createPrefab = async () => {
        if (!validDrink) return;

        await addPrefab(drink);
    }

    return (
        <TouchableOpacity onPress={createPrefab}>
            <View style={[styles.container, { ...(validDrink ? styles.completeDrink : styles.incompleteDrink) }]}>
                <Text style={[styles.addPrefabButton, { ...(validDrink ? styles.completeDrink : styles.incompleteDrink) }]}>+</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    addPrefabButton: {
        color: "#444",
        flex: 1,
        fontSize: 50,
        textAlign: "center",
        textAlignVertical: "center",
    },
    completeDrink: {
        borderColor: "#8d1e4d",
        color: "#8d1e4d"
    },
    container: {
        alignItems: "center",
        backgroundColor: "#E6E6E6",
        borderRadius: 15,
        borderWidth: 2,
        display: "flex",
        height: 80,
        justifyContent: "space-around",
        margin: 10,
        marginVertical: 5,
        textAlign: "center",
        width: 90,
    },
    incompleteDrink: {
        borderColor: "#c791a8",
        color: "#c791a8"
    }
});