import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity
} from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import PrefabCont from "../components/PrefabContainer";

function AddBeverageView(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
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
      <Text style={styles.addBeverage}>Add beverage</Text>
      <View style={styles.textInputBoxRow}>
        <View style={styles.textInputBox}>
          <View style={styles.rect2Stack}>
            <View style={styles.rect2}></View>
            <TextInput placeholder="0 %" style={styles.textInput}></TextInput>
          </View>
        </View>
        <View style={styles.textInputBox2}>
          <View style={styles.rect3Stack}>
            <View style={styles.rect3}></View>
            <TextInput placeholder="0ml" style={styles.textInput4}></TextInput>
          </View>
        </View>
        <View style={styles.dropDownPlaceholder}></View>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={styles.button}
        >
          <View style={styles.rect5}>
            <Text style={styles.add2}>Add +</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.rect6}>
        <PrefabCont style={styles.prefabCont}></PrefabCont>
        <PrefabCont style={styles.prefabCont5}></PrefabCont>
        <PrefabCont style={styles.prefabCont6}></PrefabCont>
      </View>
      <View style={styles.group}>
        <PrefabCont style={styles.prefabCont7}></PrefabCont>
        <PrefabCont style={styles.prefabCont8}></PrefabCont>
        <PrefabCont style={styles.prefabCont9}></PrefabCont>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect: {
    width: 314,
    height: 44,
    backgroundColor: "#E6E6E6",
    borderRadius: 15,
    flexDirection: "row",
    marginTop: 368,
    marginLeft: 31
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
  nameOfBeverageRow: {
    height: 24,
    flexDirection: "row",
    flex: 1,
    marginRight: 16,
    marginLeft: 13,
    marginTop: 9
  },
  addBeverage: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 22,
    marginTop: -317,
    alignSelf: "center"
  },
  textInputBox: {
    width: 52,
    height: 27
  },
  rect2: {
    top: 0,
    left: 0,
    width: 53,
    height: 27,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderRadius: 15
  },
  textInput: {
    top: 0,
    left: 13,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 27,
    width: 52
  },
  rect2Stack: {
    width: 65,
    height: 27,
    marginLeft: -13
  },
  textInputBox2: {
    width: 52,
    height: 27,
    marginLeft: 20
  },
  rect3: {
    top: 0,
    left: 0,
    width: 53,
    height: 27,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderRadius: 15
  },
  textInput4: {
    top: 1,
    left: 13,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 27,
    width: 52
  },
  rect3Stack: {
    width: 65,
    height: 28,
    marginLeft: -13
  },
  dropDownPlaceholder: {
    width: 55,
    height: 27,
    backgroundColor: "#E6E6E6",
    marginLeft: 1,
    marginTop: 1
  },
  button: {
    width: 80,
    height: 27,
    marginLeft: 40,
    marginTop: 1
  },
  rect5: {
    width: 80,
    height: 27,
    backgroundColor: "rgba(190,89,163,1)",
    borderRadius: 10
  },
  add2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 5,
    marginLeft: 24
  },
  textInputBoxRow: {
    height: 28,
    flexDirection: "row",
    marginTop: 315,
    marginLeft: 44,
    marginRight: 31
  },
  rect6: {
    width: 314,
    height: 33,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 82,
    marginLeft: 31
  },
  prefabCont: {
    height: 33,
    width: 94
  },
  prefabCont5: {
    height: 33,
    width: 94
  },
  prefabCont6: {
    height: 33,
    width: 94
  },
  group: {
    width: 314,
    height: 33,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    marginLeft: 31
  },
  prefabCont7: {
    height: 33,
    width: 94
  },
  prefabCont8: {
    height: 33,
    width: 94
  },
  prefabCont9: {
    height: 33,
    width: 94
  }
});

export default AddBeverageView;
