import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import { removePrefab } from "../../../../api/apiService";

export default function PrefabItem({ setDisplayedDrink, item, setUpdate, update }) {


  const updateDisplayedDrink = () => {
    const newDrink = {};
    Object.assign(newDrink, item);
    delete newDrink._id;
    setDisplayedDrink(newDrink)
  }


  const openDeleteWindow = () => {
    Alert.alert(
      "Delete drink?",
      "Are you sure you want to permanently delete this drink template?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "OK",
          onPress: deletePrefab
        }
      ]
    )
  }


  const deletePrefab = async () => {
    await removePrefab(item);
    setUpdate(!update);
  }


  return (
    <TouchableOpacity
      onPress={updateDisplayedDrink}
      onLongPress={openDeleteWindow}
    >
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
  beverageName: {
    color: "#121212",
    textAlign: "center",
  },
  beveragePercentage: {
    flex: 1,
    fontSize: 12,
    textAlign: "center",
  },
  beverageVolume: {
    flex: 1,
    fontSize: 12,
    textAlign: "center",
  },
  container: {
    alignItems: "center",
    backgroundColor: "#E6E6E6",
    borderRadius: 15,
    borderWidth: 2,
    display: "flex",
    height: 80,
    justifyContent: "space-around",
    margin: 10,
    marginVertical: 5,
    textAlign: "center",
    width: 90,
    zIndex: -1,
  },
  nameContainer: {
    flex: 2,
    justifyContent: "center"
  },
  volumeAndPercentagecontainer: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  }
});