import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function DrinkListItem({ item }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={[styles.cell, styles.time]}>{item.time}</Text>
      <Text style={styles.cell}>{item.beverage}</Text>
      <Text style={styles.cell}>{item.volume}</Text>
      <Text style={styles.cell}>{item.percentage}</Text>
      <View style={styles.cell}>
        <View style={[styles.circular, { backgroundColor: item.color }]} />
      </View>
    </TouchableOpacity >
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
    padding: 15,
    borderRadius: 5,
    marginVertical: 5,
    textAlign: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cell: {
    width: '25%',
  },
  time: {
    color: "#888",
    fontSize: 12,
    width: '18%',
  },
  circular: {
    width: 20,
    height: 20,
    borderRadius: 10,
  }
});