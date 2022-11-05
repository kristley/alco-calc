import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import TopBar from "./components/TopBar";
import BeverageListItem from "./components/BeverageListItem";
import FeatherIcon from "react-native-vector-icons/Feather";

function App(props) {
  return (
    <View style={styles.container}>
      <TopBar/>
      <View style={styles.group}>
      </View>
      <View style={styles.scrollArea}>
        <ScrollView contentContainerStyle={styles.scrollArea}>
          <View style={styles.tableHeaders}>
            <View style={styles.rect3}>
              <View style={styles.tableHeaderFields}>
                <Text>Time</Text>
                <Text>Beverage</Text>
                <Text>Vol</Text>
                <Text>%</Text>
                <Text>Color</Text>
              </View>
            </View>
          </View>
          <BeverageListItem style={styles.beverageListItem}></BeverageListItem>
        </ScrollView>
      </View>
      <View style={styles.addBeverageButton}>
       <FeatherIcon name="plus-circle" style={styles.icon3}></FeatherIcon>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  group: {
    width: 332,
    height: 63,
    marginTop: 60,
    marginLeft: 21
  },
  scrollArea: {
    width: 332,
    height: 524,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: 28,
    marginLeft: 21
  },
  scrollArea: {
    height: 524,
    width: 332
  },
  tableHeaders: {
    width: 286,
    height: 16,
    marginTop: 11,
    marginLeft: 23
  },
  rect3: {
    width: 305,
    height: 38,
    backgroundColor: "#E6E6E6",
    marginTop: -1,
    marginLeft: -9
  },
  tableHeaderFields: {
    width: 286,
    height: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 1,
    marginLeft: 9
  },
  beverageListItem: {
    height: 16,
    width: 286,
    marginTop: 24,
    marginLeft: 19
  },
  icon3: {
    color: "rgba(128,128,128,1)",
    fontSize: 67,
    marginLeft: 64
  },
  addBeverageButton: {
    height: 67,
    flexDirection: "row",
    marginTop: 21,
    marginLeft: 21,
    marginRight: 21
  }
});

export default App;
