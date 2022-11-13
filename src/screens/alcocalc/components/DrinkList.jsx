import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import DrinkListItem from "./DrinkListItem";

export default function DrinkList({ style, drinks }) {

  return (
    <View style={[styles.container, style]}>
      <FlatList
        style={styles.scrollArea}
        data={[...drinks].reverse()}
        inverted={true}
        renderItem={({ item }) => (
          <DrinkListItem item={item} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  circular: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  scrollArea: {
    height: 420,
    // backgroundColor: "#fff",
    marginTop: 28,
    marginHorizontal: 20,
  },
  tableHeaders: {
    width: 286,
    height: 16,
    marginTop: 11,
    marginLeft: 23,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});