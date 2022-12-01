import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import { useSetDrinksList } from "../providers/DrinksListProvider";
import { useGetIsTonight } from "../providers/NightsProvider";

export default function DrinkListItem({ drink }: { drink: Drink}) {

  const setDrinksList = useSetDrinksList();
  const isTonight = useGetIsTonight();
  const openDeleteWindow = () => {
    if (!isTonight) return;

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
          onPress: () => {
            setDrinksList((prevDrinksList) => {
              return prevDrinksList.filter((prevDrink) => prevDrink !== drink);
            });
          }
        }
      ]
    )
  }

  function formattedTime(): string {
    const date = new Date(drink.time);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onLongPress={openDeleteWindow}
    >
      <Text style={[styles.cell, styles.time]}>{formattedTime()}</Text>
      <Text style={styles.cell}>{drink.name}</Text>
      <Text style={styles.cell}>{drink.volume + drink.unit}</Text>
      <Text style={styles.cell}>{drink.percentage + "%"}</Text>
      <View style={styles.cell}>
        <View style={[styles.circular, { backgroundColor: drink.color }]} />
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