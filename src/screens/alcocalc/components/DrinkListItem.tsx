import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import { removeDrink } from "../../../api/apiService";
import { getDateString } from "../calculator/calculator";

export default function DrinkListItem() {

  const openDeleteWindow = () => {
    if (displayedDate != getDateString(today)) {
      return;
    }

    Alert.alert(
      "Remove drink?",
      "Are you sure you want to remove this drink?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "OK",
          onPress: deleteDrink
        }
      ]
    )
  }

  const deleteDrink = async () => {
    const res = await removeDrink(item)
    await res.json()
    setUpdate(!update)
    return;
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onLongPress={openDeleteWindow}
    >
      <Text style={[styles.cell, styles.time]}>{item.time}</Text>
      <Text style={styles.cell}>{item.beverage}</Text>
      <Text style={styles.cell}>{item.volume + item.unit}</Text>
      <Text style={styles.cell}>{item.percentage + "%"}</Text>
      <View style={styles.cell}>
        <View style={[styles.circular, { backgroundColor: item.color }]} />
      </View>
    </TouchableOpacity >
  );
}

const styles = StyleSheet.create({
  cell: {
    width: '25%',
  },
  circular: {
    borderRadius: 10,
    height: 20,
    width: 20,
  },
  container: {
    alignItems: "center",
    backgroundColor: "#eee",
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
    padding: 15,
    textAlign: "center",
  },
  time: {
    color: "#888",
    fontSize: 12,
    width: '18%',
  }
});