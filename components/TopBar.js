import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";

function TopBar(props) {
  return(
      <View style={styles.topBar}>
        <EntypoIcon
          name="chevron-thin-right"
          style={styles.rightArrow}
        ></EntypoIcon>
        <Text style={styles.date}>Today</Text>
        <EntypoIcon
          name="chevron-thin-left"
          style={styles.leftArrow}
        ></EntypoIcon>
      </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    width: 332,
    height: 63,
  },
  date:{
    textAlign : "center",
    fontSize: 30,
    marginTop: 20,
  },
  rightArrow: {
    top: 8,
    left: 292,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 40
  },
  leftArrow: {
    top: 8,
    left: 0,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 40
  },
});

export default TopBar;
