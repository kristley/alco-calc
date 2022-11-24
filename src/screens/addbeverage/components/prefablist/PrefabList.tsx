import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { getPrefabs } from "../../../../api/apiService";
import AddPrefabButton from "./AddPrefabButton";
import PrefabItem from "./PrefabItem";

type prefab = Drink | boolean;
export default function PrefabList() {
  const [prefabs, setPrefabs] = useState<prefab[]>([]);

  return (
    <View style={[styles.container]}>
      <FlatList
        numColumns={3}
        data={[...prefabs, true].slice(0, 9)}
        renderItem={({ item }) => {
          return typeof item === "boolean" ? (
            <AddPrefabButton />
          ) : (
            <PrefabItem drink={item} />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 2,
    justifyContent: "space-between",
    padding: 20,
    zIndex: -1,
  }
});
