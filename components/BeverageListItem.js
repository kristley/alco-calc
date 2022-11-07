import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

function BeverageListItem(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={[styles.cell, styles.time]}>{props.item.time}</Text>
      <Text style={styles.cell}>{props.item.beverage}</Text>
      <Text style={styles.cell}>{props.item.volume}</Text>
      <Text style={styles.cell}>{props.item.percentage}</Text>
      <View style={styles.cell}><View style={[styles.circular, {backgroundColor:props.item.color}]}/></View>
    </TouchableOpacity >
  );
}
  
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
    padding: 15,
    borderRadius: 5,
    marginVertical:5,
    textAlign: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cell: {
    width: '25%',
  },
  time: {
    color : "#888",
    fontSize: 12,
    width: '18%',
  },
  circular: {
    width: 20,
    height: 20,
    borderRadius: 10,
  }
});

export default BeverageListItem;
