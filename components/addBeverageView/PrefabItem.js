import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Svg, { Ellipse } from "react-native-svg";

export default function PrefabItem(item, props) {
  return (
    <View style={styles.container}>
        <Text style={styles.cell}>{item.percentage}</Text>
        <View style={styles.cell}>
          <View style={[styles.circular, {backgroundColor:item.color}]}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    width: 90,
    height: 33,
    backgroundColor: "#E6E6E6",
    borderRadius: 15,
    padding: 20,
  },
  beverageName:{
    top: 0,
    left: 13,
    fontFamily: "roboto-regular",
    color: "#121212",
    }
});

