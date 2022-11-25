import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import { removeDrink } from "../../../api/apiService";
import { getDateString } from "../calculator/calculator";
import { useSetDrinksList } from "../Providers/DrinksListProvider";

export default function DrinkListItem({ drink }: { drink: Beverage}) {

  const setDrinksList = useSetDrinksList();

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
          onPress: () => {
            removeDrink(drink.id);
            setDrinksList(drinks.filter(d => d.id != drink.id));
          }
        }
      ]
    )
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onLongPress={openDeleteWindow}
    >
      <Text style={[styles.cell, styles.time]}>{drink.time}</Text>
      <Text style={styles.cell}>{drink.beverage}</Text>
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