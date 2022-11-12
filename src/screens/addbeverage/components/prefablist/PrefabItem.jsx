import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function PrefabItem({ item }) {
  return (
    <View style={[styles.container, { borderColor: item.color }]}>
      <View style={styles.nameContainer}>
        <Text style={styles.beverageName} adjustsFontSizeToFit={true}>{item.beverage}</Text>
      </View>
      <View style={styles.volumeAndPercentagecontainer}>
        <Text style={styles.beveragePercentage} adjustsFontSizeToFit={true}>{item.percentage}</Text>
        <Text style={styles.beverageVolume} adjustsFontSizeToFit={true}>{item.volume}</Text>
      </View>
    </View>
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
