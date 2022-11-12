import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import PrefabItem from "./PrefabItem";

const data = [
  { id: 1, beverage: "Beer", volume: "0.5l", percentage: "4.7%", color: "#E8AA32" },
  { id: 2, beverage: "Beer", volume: "0.3l", percentage: "4.7%", color: "#ee0" },
  { id: 3, beverage: "Wine", volume: "2cl", percentage: "11.5%", color: "#7a121f" },
  { id: 4, beverage: "Shot", volume: "0.5l", percentage: "4.7%", color: "#6635CE" },
  { id: 5, beverage: "Cider", volume: "0.5l", percentage: "4.7%", color: "#127A6E" },
  { id: 6, beverage: "Vodka Redbull", volume: "0.5l", percentage: "4.7%", color: "#DD72D9" },
  { id: 6, beverage: "Vodka Redbull Redbull", volume: "0.5l", percentage: "4.7%", color: "#DD72D9" },

];

export default function PrefabList(props) {
  return (
    <View style={[styles.container, props.style]}>
      <FlatList
        numColumns={3}
        alignItems="center"
        data={data}
        renderItem={({ item }) => (
          <PrefabItem item={item} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    padding: 10
  },
});