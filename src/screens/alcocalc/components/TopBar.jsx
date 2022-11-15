import React from "react";
import { StyleSheet, View, Text } from "react-native";
import ArrowButton from "./ArrowButton";

export default function TopBar() {
  return (
    <View style={styles.topBar}>
      <ArrowButton
        symbol="chevron-thin-left"
      />

      <Text style={styles.date}>
        Today
      </Text>

      <ArrowButton
        symbol="chevron-thin-right"
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