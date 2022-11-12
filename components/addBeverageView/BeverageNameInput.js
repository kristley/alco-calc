import React from "react";
import { StyleSheet, View, TextInput} from "react-native";
import Svg, { Ellipse } from "react-native-svg";


export default function BeverageNameInput(){
    return (
        <View style={styles.container}>
          < TextInput
              placeholder="Name of beverage"
              style={styles.textInput}
            ></TextInput>
          <View style={styles.colorContainer}>
            <View style={styles.circular}/> 
          </View>
          
        </View>
    )
}

const styles = StyleSheet.create({
      container: {
        paddingHorizontal: 10,
        height: 27,
        backgroundColor: "#E6E6E6",
        borderRadius: 15,
        alignSelf: "center",
        flexDirection:"row",
        flex:1
      },
      textInput: {
        top: 0,
        left: 13,
        color: "#121212",
        height: 27,
        width: 52,
        flex:1
      },
      colorContainer: {
        justifyContent:"center"
      },
      circular: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: "red",
      }
});