import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import ArrowButton from "./ArrowButton";
import { getAvailableDates } from "../../../api/apiService";

export default function TopBar() {

  // todo get date setter function from provider

  return (
    <View style={styles.topBar}>
      <ArrowButton
        symbol="chevron-thin-left"
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