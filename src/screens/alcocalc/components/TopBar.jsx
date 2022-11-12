import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";

export default function TopBar(props) {
  return (
    <View style={styles.topBar}>
      <EntypoIcon
        name="chevron-thin-left"
        style={styles.arrow}
      />
      <Text style={styles.date}>Today</Text>
      <EntypoIcon
        name="chevron-thin-right"
        style={styles.arrow}
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

  },
  arrow: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    // backgroundColor: "#55f",
  },
});