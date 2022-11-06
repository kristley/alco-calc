import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Svg, { Ellipse } from "react-native-svg";

function BeverageListItem(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.time}>19:00</Text>
      <Text style={styles.beer}>Beer</Text>
      <Text style={styles.vol}>0.5L</Text>
      <Text style={styles.text}>4.7%</Text>
      <View style={styles.cicular}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ellipse: {
    width: 20,
    height: 20
  },
  cicular: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "rgba(128,128,128,1)"
  }
});

export default BeverageListItem;
