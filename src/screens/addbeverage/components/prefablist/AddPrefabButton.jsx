import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { useState, useEffect } from "react";
import { addPrefab } from "../../../../api/apiService";

export default function AddPrefabButton({ displayedDrink, setUpdate, update }) {

    const [completeDrink, setCompleteDrink] = useState(false);

    const createPrefab = async () => {
        if (!completeDrink) {
            return;
        }
        await addPrefab(displayedDrink);
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