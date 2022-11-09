import React from "react";
import { StyleSheet, View, TextInput} from "react-native";
import Svg, { Ellipse } from "react-native-svg";


export default function BeverageUnitInput(){
    return (
        <View style={styles.container}>
             <View style={styles.dropDownPlaceholder}></View>
        </View>
    )
}

const styles = StyleSheet.create({
  container:{
  },
  dropDownPlaceholder: {
    width: 55,
    height: 27,
    backgroundColor: "#E6E6E6",
    marginLeft: 1,
    marginTop: 1
  }
});
    