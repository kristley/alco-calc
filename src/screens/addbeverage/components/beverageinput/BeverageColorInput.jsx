import React from "react";
import { StyleSheet, View} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


export default function BeverageColorInput({style}){
    return (
        <TouchableOpacity style={[styles.container]}/>
    )
}

const styles = StyleSheet.create({
    container:{
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: "#ff0000",
        marginLeft: 20
    }
});