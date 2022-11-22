import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { getPrefabs } from "../../../../api/apiService";
import AddPrefabButton from "./AddPrefabButton";
import PrefabItem from "./PrefabItem";

export default function PrefabList({ setDisplayedDrink, displayedDrink }) {

  const [prefabs, setPrefabs] = useState([]);

  //Hacky solution, but it refused to update properly
  const [update, setUpdate] = useState(true);

  useEffect(() => {
    const updatePrefabs = async () => {
      const data = await getPrefabs();
			const json = await data.json();
      setPrefabs(json)

    }
    updatePrefabs()
  }, [update])

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
                style={styles.item}
              />
            );
          }
          return (
            <PrefabItem
              item={item}
              setDisplayedDrink={setDisplayedDrink}
              setUpdate={setUpdate} update={update}
              style={styles.item}
            />
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
