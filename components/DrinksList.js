import React from "react";
import { StyleSheet, View, Text, ScrollView} from "react-native";
import BeverageListItem from "./BeverageListItem";

function DrinksList() {
	return (
		<View style={styles.container}>
			<ScrollView contentContainerStyle={styles.scrollArea}>
      <View style={styles.tableHeaders}>
            <Text>Time</Text>
            <Text>Beverage</Text>
            <Text>Vol</Text>
            <Text>%</Text>
            <Text>Color</Text>
      </View>
				<BeverageListItem style={styles.beverageListItem}/>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
  container: {
    
  },
  scrollArea: {
    height: 524,
    backgroundColor: "#fff",
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
  beverageListItem: {
    height: 16,
    width: 286,
    marginTop: 24,
    marginLeft: 19
  },
});

export default DrinksList;