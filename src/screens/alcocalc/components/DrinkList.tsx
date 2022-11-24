import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import DrinkListItem from "./DrinkListItem";

export default function DrinkList() {
  return (
    <View style={style}>
      <FlatList
        style={styles.scrollArea}
        data={[...drinks].reverse()}
        inverted={true}
        renderItem={({ item }) => (
          <DrinkListItem/>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  scrollArea: {
    height: 420,
    marginHorizontal: 20,
    marginTop: 28,
  },
});