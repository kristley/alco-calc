import React from "react";
import { View, StyleSheet} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import TopBar from "./TopBar";
import DrinksList from "./DrinksList";

function AlcoCalcView() {
  return (
    <View style={styles.addBeverageButton}>
      {/* <TopBar style={styles.topBar} />
      <DrinksList />
        <FeatherIcon
          name="plus-circle"
          style={styles.plusIcon}
        ></FeatherIcon> */}
    </View>
  );
}

styles = StyleSheet.create({
	plusIcon: {
		color: "rgba(128,128,128,1)",
		fontSize: 67,
		marginLeft: 64,
	},
	addBeverageButton: {
		height: 67,
		flexDirection: "row",
		marginTop: 21,
		marginLeft: 21,
		marginRight: 21,
	},
});

export default AlcoCalcView;