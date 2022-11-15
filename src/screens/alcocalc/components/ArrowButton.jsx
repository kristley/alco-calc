import { TouchableOpacity, StyleSheet } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";


export default function ArrowButton({ symbol }) {
    return (
        <TouchableOpacity>
            <EntypoIcon
                name={symbol}
                style={styles.arrow}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    arrow: {
        color: "rgba(128,128,128,1)",
        fontSize: 40,
    }
});