import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Svg, { Ellipse } from "react-native-svg";


export default function BeverageNameInput() {
  return (
    <View style={styles.beverageInputRectangle}>
      <View style={styles.nameOfBeverageRow}>
        <TextInput
          placeholder="Name of beverage"
          style={styles.nameOfBeverage}
        />
        <View style={styles.ellipse} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  beverageInputRectangle: {
    width: 314,
    height: 44,
    backgroundColor: "#E6E6E6",
    borderRadius: 15,
    flexDirection: "row",

  },
  nameOfBeverageRow: {
    height: 24,
    flexDirection: "row",
    flex: 1,
    marginRight: 16,
    marginLeft: 13,
    marginTop: 9
  },
  nameOfBeverage: {
    color: "#121212",
    height: 23,
    width: 164,
    marginTop: 1
  },
  ellipse: {
    width: 24,
    height: 24,
    marginLeft: 97,
    borderRadius: 12,
    backgroundColor: "rgba(208,2,27,1)"
  },
});