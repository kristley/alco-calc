import React from "react";
import { Text,StyleSheet, View, TextInpu, TouchableOpacity} from "react-native";
import Svg, { Ellipse } from "react-native-svg";


export default function AddBeverageButton(props){
    return (
        <View style={styles.container}>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={styles.button}
        >
          <View style={styles.rect5}>
            <Text style={styles.add2}>Add +</Text>
          </View>
        </TouchableOpacity>
        </View>
       
    )
}

const styles = StyleSheet.create({
    container:{
        
    },
    button: {
        width: 80,
        height: 27,
    },
    rect5: {
        width: 80,
        height: 27,
        backgroundColor: "rgba(190,89,163,1)",
        borderRadius: 10
      },
    add2: {
        color: "#121212",
        marginTop: 5,
        marginLeft: 24
      },
});