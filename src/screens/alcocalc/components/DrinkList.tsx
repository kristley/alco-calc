import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { useGetDrinksList } from "../providers/DrinksListProvider";
import DrinkListItem from "./DrinkListItem";

export default function DrinkList() {
  const drinks = useGetDrinksList();
  return (
    <View>
      <FlatList
        style={styles.scrollArea}
        data={[...drinks].reverse()}
        inverted={true}
        renderItem={({ item }) => (
          <DrinkListItem drink={item}/>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  scrollArea: {
    // Todo: shouldn't set height
    height: 420,
    marginHorizontal: 20,
    marginTop: 28,
  },
});