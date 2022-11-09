import { View, StyleSheet } from 'react-native'
import React from 'react'
import TopBar from "../components/TopBar";
import DrinksList from "../components/DrinksList";
import FeatherIcon from "react-native-vector-icons/Feather";

export default function AlcoCalcView() {
  return (
    <View style={styles.container}>
      <TopBar style={styles.topBar}/>
      <DrinksList style={styles.list}/>
      <View style={styles.addBeverageButton}>
        <FeatherIcon name="plus-circle" style={styles.plusIcon}></FeatherIcon>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flex: 1
  },
  topBar: {
    marginTop: 40,
    paddingTop: 20,
    paddingHorizontal: 20,
    flex: 1
  },
  list: {
    flex: 2,
  },
  addBeverageButton: {
    height: 67,
    // move to bottom right of screen
    // position: "absolute",
    bottom: 0,
    right: 0,
    flex: 1,
  },
  plusIcon: {
    color: "rgba(128,128,128,1)",
    fontSize: 80,
    // move to bottom right of screen
    position: "absolute", 
    bottom: 20,
    right: 20,
  },
})