import React from "react";
import { StyleSheet, View, Text } from "react-native";
import ArrowButton from "./ArrowButton";

export default function TopBar({ displayedDate, setDisplayedDate, today }) {

  const toReadableDate = (date) => {
    return new Date(date.substring(0, 4), date.substring(5, 6) - 1, date.substring(7, 8)).toDateString()
  }

  return (
    <View style={styles.topBar}>
      <ArrowButton
        symbol="chevron-thin-left"
        displayedDate={displayedDate}
        setDisplayedDate={setDisplayedDate}
        forward={false}
        today={today}
      />

      <Text style={styles.date}>
        {
          displayedDate == today ?
            "Today" :
            toReadableDate(displayedDate)
        }
      </Text>

      <ArrowButton
        symbol="chevron-thin-right"
        displayedDate={displayedDate}
        setDisplayedDate={setDisplayedDate}
        forward={true}
        today={today}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    marginHorizontal: 20,
    backgroundColor: "#eee",
    borderRadius: 20,
  },
  date: {
    // textAlign : "center",
    fontSize: 30,
  }
});