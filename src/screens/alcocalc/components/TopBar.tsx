import { StyleSheet, View, Text } from "react-native";
import ArrowButton from "./ArrowButton";

export default function TopBar() {

  return (
    <View style={styles.topBar}>
      <ArrowButton
        symbol="chevron-thin-left"
        onPress={() => {}}
        // todo onpress should navigate to previous day
      />

      <Text style={styles.date}>
        {
          displayedDate == todayString ?
            "Today" :
            readableDate
        }
      </Text>

      <ArrowButton
        symbol="chevron-thin-right"
        onPress={() => {}}
        // todo onpress should navigate to next day
      />
    </View>
  );
}

const styles = StyleSheet.create({
  date: {
    fontSize: 24,
  },
  topBar: {
    alignItems: "center",
    backgroundColor: "#eee",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    padding: 15,
  },
});