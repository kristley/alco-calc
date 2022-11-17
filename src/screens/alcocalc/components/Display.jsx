import { View, Text, StyleSheet} from "react-native";


export default function Display({ title, value }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
	title: {
		fontSize: 15,
		fontWeight: "bold",
	},
	value: {
		marginTop: 15,
	}
});
