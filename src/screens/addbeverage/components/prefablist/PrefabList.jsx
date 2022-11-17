import React from "react";
import { StyleSheet, View, FlatList, Alert } from "react-native";
import { getPrefabs } from "../../../../api/prefabs";
import PrefabItem from "./PrefabItem";

export default function PrefabList({ prefabs, setDisplayedDrink }) {
  
  
  return (
    <View style={[styles.container]}>
      <FlatList
        numColumns={3}
        alignItems="center"
        data={prefabs}
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
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    padding: 10
  },
});

