import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { getPrefabs } from "../../../../api/prefabs";
import PrefabItem from "./PrefabItem";

export default function PrefabList(props) {

  let data = getPrefabs();

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

