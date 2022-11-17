import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList, Alert } from "react-native";
import { getPrefabs } from "../../../../api/prefabs";
import AddPrefabButton from "./AddPrefabButton";
import PrefabItem from "./PrefabItem";

export default function PrefabList({ setDisplayedDrink, displayedDrink }) {

  const [prefabs, setPrefabs] = useState([]);

  //Hacky solution, but it refused to update properly
  const [update, setUpdate] = useState(true);

  useEffect(() => {
    updatePrefabs();
  }, [update])

  const updatePrefabs = () => {
    setPrefabs(getPrefabs());
  }

  return (
    <View style={[styles.container]}>
      <FlatList
        numColumns={3}
        alignItems="center"
        data={[...prefabs, { plusImage: true }].slice(0, 9)}
        renderItem={({ item }) => {
          if (item.plusImage) {
            return (
              <AddPrefabButton
                displayedDrink={displayedDrink}
                setUpdate={setUpdate}
                update={update}
              />
            );
          }
          return (
            <PrefabItem
              item={item}
              setDisplayedDrink={setDisplayedDrink}
              setUpdate={setUpdate} update={update}
            />
          );
        }}
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
  }
});