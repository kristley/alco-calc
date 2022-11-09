import React from "react";
import { StyleSheet, View, TextInput} from "react-native";
import Svg, { Ellipse } from "react-native-svg";


export default function BeverageNameInput(){
    return (
        <View style={styles.beverageInputRectangle}>
        <View style={styles.nameOfBeverageRow}>
          <TextInput
            placeholder="Name of beverage"
            style={styles.nameOfBeverage}
          ></TextInput>
          <Svg viewBox="0 0 24.23 24.41" style={styles.ellipse}>
          <Ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="rgba(208,2,27,1)"
              cx={12}
              cy={12}
              rx={12}
              ry={12}
            ></Ellipse>
            
          </Svg>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    beverageInputRectangle: {
        width: 314,
        height: 44,
        backgroundColor: "#E6E6E6",
        borderRadius: 15,
        flexDirection: "row",
        marginLeft: 31
      },
      nameOfBeverageRow: {
        height: 24,
        flexDirection: "row",
        flex: 1,
        marginRight: 16,
        marginLeft: 13,
        marginTop: 9
      },
      nameOfBeverage: {
        fontFamily: "roboto-regular",
        color: "#121212",
        height: 23,
        width: 164,
        marginTop: 1
      },
      ellipse: {
        width: 24,
        height: 24,
        marginLeft: 97
      },
});