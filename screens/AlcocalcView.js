import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Text
} from "react-native";
import TopBar from "../components/TopBar";
import EntypoIcon from "react-native-vector-icons/Entypo";
import BeverageListItem from "../components/BeverageListItem";
import FeatherIcon from "react-native-vector-icons/Feather";

function AlcocalcView(props) {
  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <View style={styles.topBarStack}>
          <TopBar style={styles.topBar}></TopBar>
          <View style={styles.forwardButton}>
            <View style={styles.button3Row}>
              <TouchableOpacity style={styles.button3}></TouchableOpacity>
              <EntypoIcon
                name="chevron-thin-right"
                style={styles.icon}
              ></EntypoIcon>
            </View>
          </View>
          <View style={styles.backButton}>
            <TouchableOpacity style={styles.button2}>
              <EntypoIcon
                name="chevron-thin-left"
                style={styles.icon2}
              ></EntypoIcon>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.scrollArea}>
        <ScrollView
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <View style={styles.tableHeaders}>
            <View style={styles.rect3}>
              <View style={styles.group2}>
                <Text style={styles.time}>Time</Text>
                <Text style={styles.beverage}>Beverage</Text>
                <Text style={styles.vol}>Vol</Text>
                <Text style={styles.beverage4}>%</Text>
                <Text style={styles.color}>Color</Text>
              </View>
            </View>
          </View>
          <BeverageListItem style={styles.beverageListItem}></BeverageListItem>
        </ScrollView>
      </View>
      <View style={styles.group3}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("AddBeverageView")}
          style={styles.button}
        >
          <FeatherIcon name="plus-circle" style={styles.icon3}></FeatherIcon>
        </TouchableOpacity>
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
  topBar: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 63,
    width: 332
  },
  textInput: {
    top: 21,
    left: 125,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    lineHeight: 20,
    width: 82,
    height: 20,
    fontSize: 28
  },
  forwardButton: {
    top: 8,
    left: 292,
    width: 40,
    height: 46,
    position: "absolute",
    flexDirection: "row"
  },
  button3: {
    width: 40,
    height: 47,
    backgroundColor: "#E6E6E6"
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginLeft: 252,
    marginTop: 1
  },
  button3Row: {
    height: 47,
    flexDirection: "row",
    flex: 1,
    marginLeft: -292,
    marginTop: -1
  },
  backButton: {
    top: 8,
    left: 0,
    width: 40,
    height: 47,
    position: "absolute"
  },
  button2: {
    width: 40,
    height: 47,
    backgroundColor: "#E6E6E6"
  },
  icon2: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 46,
    width: 40,
    marginTop: 1
  },
  topBarStack: {
    width: 332,
    height: 63
  },
  scrollArea: {
    width: 332,
    height: 524,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: 29,
    marginLeft: 21
  },
  scrollArea_contentContainerStyle: {
    height: 524,
    width: 332
  },
  tableHeaders: {
    width: 286,
    height: 16,
    marginTop: 10,
    marginLeft: 23
  },
  rect3: {
    width: 305,
    height: 38,
    backgroundColor: "#E6E6E6",
    marginTop: -1,
    marginLeft: -9
  },
  group2: {
    width: 286,
    height: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 1,
    marginLeft: 9
  },
  time: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 14,
    left: 0,
    top: 0
  },
  beverage: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 14
  },
  vol: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 14
  },
  beverage4: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 14,
  },
  color: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 14,
  },
  beverageListItem: {
    height: 16,
    width: 286,
    marginTop: 24,
    marginLeft: 19
  },
  group3: {
    width: 67,
    height: 67,
    marginTop: 20,
    marginLeft: 287
  },
  button: {
    width: 67,
    height: 67,
    backgroundColor: "#fff"
  },
  icon3: {
    color: "rgba(128,128,128,1)",
    fontSize: 67,
    height: 67,
    width: 67
  }
});

export default AlcocalcView;
