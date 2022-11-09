import React from "react";
import { StyleSheet, View} from "react-native";


export default function BeverageUnitInput(){
    return (
        <View style={styles.container}>
             <View style={styles.dropDownPlaceholder}/>
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
    