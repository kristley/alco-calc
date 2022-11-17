import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { useState, useEffect } from "react";
import { addPrefab } from "../../../../api/prefabs";

export default function AddPrefabButton({ displayedDrink, setUpdate, update }) {

    const [completeDrink, setCompleteDrink] = useState(false);

    const createPrefab = () => {
        if (!completeDrink) {
            return;
        }

        addPrefab(displayedDrink);
        setUpdate(!update);
    }

    useEffect(() => {
        setCompleteDrink(!Object.values(displayedDrink).some((x) => x === ""));
    }, [displayedDrink]);

    return (
        <TouchableOpacity
            onPress={createPrefab}
        >
            <View style={[styles.container, { ...(completeDrink ? styles.completeDrink : styles.incompleteDrink) }]}>
                <Text style={[styles.addPrefabButton, { ...(completeDrink ? styles.completeDrink : styles.incompleteDrink) }]}>+</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        textAlign: "center",
        backgroundColor: "#E6E6E6",
        width: 90,
        margin: 10,
        height: 80,
        borderRadius: 15,
        marginVertical: 5,
        alignItems: "center",
        borderWidth: 2,
        display: "flex",
        justifyContent: "space-around",
    },
    addPrefabButton: {
        flex: 1,
        fontSize: 50,
        textAlign: "center",
        textAlignVertical: "center",
        color: "#444",
    },
    completeDrink: {
        color: "#8d1e4d",
        borderColor: "#8d1e4d"
    },
    incompleteDrink: {
        color: "#c791a8",
        borderColor: "#c791a8"
    }
});