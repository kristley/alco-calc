import React from "react";
import { StyleSheet, View, TextInput} from "react-native";
import Svg, { Ellipse } from "react-native-svg";


export default function BeverageVolumeInput(){
    return (
      <View style={styles.container}>
      <TextInput placeholder="0ml" style={styles.textInput}></TextInput>
      </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width: 53,
    height: 27,
    backgroundColor: "#E6E6E6",
    borderRadius: 15
  },
  textInput:{
    top: 0,
    left: 13,
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 27,
    width: 52
  }
});
    


