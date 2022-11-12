import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Svg, { Ellipse } from "react-native-svg";

function PrefabCont(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.button2}></TouchableOpacity>
      <View style={styles.rect7}></View>
      <Text style={styles.loremIpsum}>0.5L</Text>
      <Text style={styles.beer}>Beer</Text>
      <Text style={styles.text5}>4.7%</Text>
      <View style={styles.circle}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  button2: {
    top: 0,
    left: 0,
    width: 94,
    height: 33,
    position: "absolute"
  },
  prefabContainer: {
    height: 33,
    width: 94
  },
  container: {
    flexDirection: "row"
  },
  prefabBox: {
    height: 33,
    width: 94
  },
  circle: {
    top: 9,
    left: 5,
    width: 16,
    height: 16,
    position: "absolute",
    borderRadius: 8,
    backgroundColor: "rgba(208,2,27,1)",
  },
  container: {
    flexDirection: "row"
  },
  rect7: {
    width: 94,
    height: 33,
    backgroundColor: "#E6E6E6",
    borderRadius: 15
  },
  loremIpsum: {
    top: 7,
    left: 70,
    position: "absolute",
    color: "#121212",
    fontSize: 8
  },
  beer: {
    top: 9,
    left: 27,
    position: "absolute",
    color: "#121212",
    fontSize: 12
  },
  text5: {
    top: 20,
    left: 70,
    position: "absolute",
    color: "#121212",
    fontSize: 8
  }
});

export default PrefabCont;
