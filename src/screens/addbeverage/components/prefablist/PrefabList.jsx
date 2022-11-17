import React from "react";
import { StyleSheet, View, FlatList, Alert } from "react-native";
import { getPrefabs } from "../../../../api/prefabs";
import PrefabItem from "./PrefabItem";

export default function PrefabList({ setDisplayedDrink }) {

  let data = getPrefabs();

  return (
    <View style={[styles.container]}>
      <FlatList
        numColumns={3}
        alignItems="center"
        data={data}
        renderItem={({ item }) => (
          <PrefabItem item={item} setDisplayedDrink={setDisplayedDrink} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    zIndex: -1,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    padding: 10
  },
});

