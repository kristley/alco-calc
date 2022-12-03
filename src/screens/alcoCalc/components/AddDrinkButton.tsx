import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function AddDrinkButton() {

    const navigation = useNavigation();

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
        alignSelf: "center",
        backgroundColor: "#8d1e4d",
        borderRadius: 35,
        height: 70,
        marginBottom: 20,
        width: 70
    },
    addBeverageButtonText: {
        color: "#fff",
        flex: 1,
        fontSize: 50,
        textAlign: "center",
        textAlignVertical: "center",
    }
});