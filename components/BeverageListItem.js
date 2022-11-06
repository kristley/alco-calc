import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function BeverageListItem(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text>{props.item.time}</Text>
      <Text>{props.item.beverage}</Text>
      <Text>{props.item.volume}</Text>
      <Text>{props.item.percentage}</Text>
      <View style={[styles.circular, {backgroundColor:props.item.color}]}/>
    </View>
  );
}
  
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  circular: {
    width: 20,
    height: 20,
    borderRadius: 10,
  }
});

export default BeverageListItem;
