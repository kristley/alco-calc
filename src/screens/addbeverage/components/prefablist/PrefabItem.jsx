import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";

export default function PrefabItem({ setDisplayedDrink, item }) {

  const updateDisplayedDrink = () => {
    const newDrink = {};
    Object.assign(newDrink, item);
    delete newDrink.id;
    setDisplayedDrink(newDrink)
  }

  return (
    <TouchableOpacity onPress={updateDisplayedDrink}>
      <View style={[styles.container, { borderColor: item.color }]}>
        <View style={styles.nameContainer}>
          <Text style={styles.beverageName} adjustsFontSizeToFit={true}>{item.beverage}</Text>
        </View>
        <View style={styles.volumeAndPercentagecontainer}>
          <Text style={styles.beveragePercentage} adjustsFontSizeToFit={true}>{item.percentage + '%'}</Text>
          <Text style={styles.beverageVolume} adjustsFontSizeToFit={true}>{item.volume + item.unit}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
    backgroundColor: "#E6E6E6",
    width: 90,
    margin: 10,
    height: 80,
    borderRadius: 15,
    marginVertical: 5,
    alignItems: "center",
    borderWidth: 2,
    display: "flex",
    justifyContent: "space-around"
  },
  beverageName: {
    textAlign: "center",
    color: "#121212",
  },
  beveragePercentage: {
    flex: 1,
    textAlign: "center",
    fontSize: 12,
  },
  beverageVolume: {
    flex: 1,
    textAlign: "center",
    fontSize: 12,
  },
  volumeAndPercentagecontainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  nameContainer: {
    flex: 2,
    justifyContent: "center"
  }
});