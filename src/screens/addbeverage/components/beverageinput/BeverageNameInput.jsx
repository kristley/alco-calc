import React, { useEffect, useState } from "react";
import { StyleSheet, View, TextInput, Alert } from "react-native";

export default function BeverageNameInput({ displayedDrink, setDisplayedDrink }) {

  const [name, setName] = useState("");

  const updateName = (value) => {
    setName(value);
    const newDrink = {};
    Object.assign(newDrink, displayedDrink);
    newDrink.beverage = value;
    setDisplayedDrink(newDrink);
  }

  useEffect(() => {
    setName(displayedDrink.beverage)
  }, [displayedDrink])


  return (
    <View style={styles.beverageInputRectangle}>
      <View style={styles.nameOfBeverageRow}>
        <TextInput
          placeholder="Name of beverage"
          style={styles.nameOfBeverage}
          value={name}
          onChangeText={updateName}
        />
        {/* <View style={[styles.ellipse, { backgroundColor: displayedDrink.color }]} /> */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  beverageInputRectangle: {
    width: 280,
    height: 44,
    backgroundColor: "#E6E6E6",
    borderRadius: 15,
    flexDirection: "row",
    marginLeft: 31
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
  },
});