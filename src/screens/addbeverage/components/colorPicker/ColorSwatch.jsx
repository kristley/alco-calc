import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

export default function ColorSwatch({ color, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, { backgroundColor: color }]} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {
        width: 30,
        height: 30,
        borderRadius: 15,
        margin: 5,
    },
});