import React from "react";
import { StyleSheet, View, Text, FlatList} from "react-native";
import BeverageListItem from "./BeverageListItem";

const data = [
  {id:1, time: '19:00', beverage: "beer", volume: "0.5l", percentage: "4.7%", color: "#ee0"},
  {id:2, time: "20:00", beverage: "beer", volume: "0.3l", percentage: "4.7%", color: "#ee0"},
  {id:3, time: "20:30", beverage: "wine", volume: "2cl", percentage: "11.5%", color: "#400000"},
  {id:4, time: "21:00", beverage: "beverage", volume: "0.5l", percentage: "4.7%", color: "#ee0"},
  {id:5, time: "22:00", beverage: "beer", volume: "0.5l", percentage: "4.7%", color: "#ee0"},
  {id:6, time: "23:00", beverage: "beer", volume: "0.5l", percentage: "4.7%", color: "#ee0"},
  {id:7, time: "00:00", beverage: "beer", volume: "0.5l", percentage: "4.7%", color: "#ee0"},
  {id:8, time: "01:00", beverage: "beer", volume: "0.5l", percentage: "4.7%", color: "#ee0"},
  {id:9, time: "02:00", beverage: "beer", volume: "0.5l", percentage: "4.7%", color: "#ee0"},
  {id:10, time: "03:00", beverage: "beer", volume: "0.5l", percentage: "4.7%", color: "#ee0"},
  {id:11, time: "04:00", beverage: "beer", volume: "0.5l", percentage: "4.7%", color: "#ee0"},
  {id:12, time: "05:00", beverage: "beer", volume: "0.5l", percentage: "4.7%", color: "#ee0"},
  {id:13, time: "06:00", beverage: "beer", volume: "0.5l", percentage: "4.7%", color: "#ee0"},
  {id:14, time: "07:00", beverage: "beer", volume: "0.5l", percentage: "4.7%", color: "#ee0"},
  {id:15, time: "08:00", beverage: "beer", volume: "0.5l", percentage: "4.7%", color: "#ee0"},
  {id:16, time: "09:00", beverage: "beer", volume: "0.5l", percentage: "4.7%", color: "#ee0"},
  {id:17, time: "10:00", beverage: "beer", volume: "0.5l", percentage: "4.7%", color: "#ee0"},
];

function DrinksList() {
	return (
    <View style={styles.container}>
        {/* <View style={styles.tableHeaders}>
              <Text>Time</Text>
              <Text>Beverage</Text>
              <Text>Vol</Text>
              <Text>%</Text>
              <Text>Color</Text>
        </View> */}
      <FlatList 
        style={styles.scrollArea} 
        data={[...data].reverse()} 
        inverted={true}
        renderItem={({item}) => (
          <BeverageListItem item={item}/>
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

export default DrinksList;