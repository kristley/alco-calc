import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function AddDrinkButton({ navigation }) {

    return (
        <TouchableOpacity
            style={styles.addBeverageButton}
            onPress={() => navigation.navigate("AddBeverageView")}
        >
            <Text style={styles.addBeverageButtonText}>+</Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    addBeverageButton: {
        height: 70,
        width: 70,
        borderRadius: 35,
        backgroundColor: "#8d1e4d",
        alignSelf: "center",
        marginBottom: 20
    },
    addBeverageButtonText: {
        flex: 1,
        fontSize: 50,
        textAlign: "center",
        textAlignVertical: "center",
        color: "#fff",
    }
});