import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { getDrinks } from "../../../api/drinks";
import DrinkListItem from "./DrinkListItem";

export default function DrinkList(props) {

  const data = getDrinks("20220428");

  return (
    <View style={[styles.container, props.style]}>
      <FlatList
        style={styles.scrollArea}
        data={[...data].reverse()}
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