import React from "react";
import { StyleSheet, View, Text, FlatList} from "react-native";
import PrefabItem from "./PrefabItem";

const data = [
  {id:1, beverage: "Beer", volume: "0.5l", percentage: "4.7%", color: "#ee0"},
  {id:2, beverage: "Beer", volume: "0.3l", percentage: "4.7%", color: "#ee0"},
  {id:3, beverage: "Wine", volume: "2cl", percentage: "11.5%", color: "#400000"},
  {id:4, beverage: "Shot", volume: "0.5l", percentage: "4.7%", color: "#ee0"},
  {id:5, beverage: "Cider", volume: "0.5l", percentage: "4.7%", color: "#ee0"},
  {id:6, beverage: "Vodka Redbull", volume: "0.5l", percentage: "4.7%", color: "#ee0"},

];

export default function PrefabList(props) {
	return (
    <View style={[styles.container, props.style]}>
      <FlatList 
        style={styles.scrollArea}
        numColumns={3} 
        alignItems="center"
        data={[...data].reverse()} 
        renderItem={({item}) => (
          <PrefabItem item={item}/>
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
  circular: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  scrollArea: {
    height: 300,}
});