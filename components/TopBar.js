import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";

function TopBar(props) {
  return(
    <View style={styles.topBar}>
      <View style={styles.topBarStack}>
        <EntypoIcon
          name="chevron-thin-right"
          style={styles.icon}
        ></EntypoIcon>
        <EntypoIcon
          name="chevron-thin-left"
          style={styles.icon2}
        ></EntypoIcon>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 63,
    width: 332
  },
  topBarStack: {
    width: 332,
    height: 63
  },
  icon: {
    top: 8,
    left: 292,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 40
  },
  icon2: {
    top: 8,
    left: 0,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 40
  },
});

export default TopBar;
