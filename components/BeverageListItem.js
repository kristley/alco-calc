import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Svg, { Ellipse } from "react-native-svg";

function BeverageListItem(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.time}>19:00</Text>
      <Text style={styles.beer}>Beer</Text>
      <Text style={styles.vol}>0.5L</Text>
      <Text style={styles.text}>4.7%</Text>
      {/* <Svg viewBox="0 0 20.35 20.4" style={styles.ellipse}>
        <Ellipse
          stroke="rgba(230, 230, 230,1)"
          strokeWidth={0}
          fill="rgba(208,2,27,1)"
          cx={10}
          cy={10}
          rx={10}
          ry={10}
        ></Ellipse>
      </Svg> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  time: {
    color: "#121212",
    fontSize: 14,
    left: 0,
    top: 0,
    height: 16,
    width: 50,
    textAlign: "center"
  },
  beer: {
    color: "#121212",
    fontSize: 14,
    width: 72,
    textAlign: "center"
  },
  vol: {
    color: "#121212",
    fontSize: 14,
    width: 50,
    textAlign: "center"
  },
  text: {
    color: "#121212",
    fontSize: 14,
    left: 174,
    width: 50,
    top: 8,
    height: 16,
    textAlign: "center"
  },
  ellipse: {
    width: 20,
    height: 20
  }
});

export default BeverageListItem;
