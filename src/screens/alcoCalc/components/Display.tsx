import { View, Text, StyleSheet} from "react-native";

type DisplayProps = {
    value: string;
    title: string;
}

export default function Display({ title, value }: DisplayProps) {
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
