// a list of color swatches that can be selected to change the color of the color field for the new beverage

import React from "react";
import { View, FlatList } from "react-native";
import ColorSwatch from "./ColorSwatch";

export default function ColorList({ setColor }) {
	  const colors = [
	"#FF0000",
	"#FFA500",
	"#FFFF00",
	"#008000",
	"#0000FF",
	"#4B0082",
	"#EE82EE",
	"#FFFFFF",
	"#000000",
  ];

  return (
	<View>
	  <FlatList
		numColumns={3}
		data={colors}
		renderItem={({ item }) => (
		  <ColorSwatch color={item} onPress={() => setColor(item)} />
		)}
	  />
	</View>
  );
}