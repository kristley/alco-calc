import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import DrinkListItem from "./DrinkListItem";

export default function DrinkList({ style, drinks, update, setUpdate, displayedDate, today }) {




  return (
    <View style={style}>
      <FlatList
        style={styles.scrollArea}
        data={[...drinks].reverse()}
        inverted={true}
        renderItem={({ item }) => (
          <DrinkListItem
            item={item}
            update={update}
            setUpdate={setUpdate}
            displayedDate={displayedDate}
            today={today}
          />
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