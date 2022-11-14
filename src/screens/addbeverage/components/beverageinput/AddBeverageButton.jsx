import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { addDrink2 } from "../../../../api/drinks";

export default function AddBeverageButton({ displayedDrink, navigation }) {

  const [completeDrink, setCompleteDrink] = useState(false);

  const addBeverage = () => {
    if (!completeDrink) {
      return;
    }
    addDrink2(displayedDrink);
    navigation.navigate("AlcoCalcView", { 'paramPropKey': 'paramPropValue' });
  }

  useEffect(() => {
    setCompleteDrink(!Object.values(displayedDrink).some(x => x === ''));
  }, [displayedDrink])


  return (
      <TouchableOpacity
        onPress={addBeverage}
        style={styles.button}
      >
        {
          completeDrink ?
            <View style={[styles.completeView, {backgroundColor: "rgba(190,89,163, 1)"}]}>
              <Text style={styles.add}>Add +</Text>
            </View> :
            <View style={[styles.completeView, {backgroundColor: "rgba(145, 145, 145, 1)"}]}>
    
              <Text style={styles.add}>Add +</Text>
            </View>
        }

      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 40,
    height: 27,
    backgroundColor: "#f00",
  },
  completeView: {
    width: 40,
    height: 27,
    borderRadius: 10
  },
  add: {
    color: "#121212",
    marginTop: 5,
    marginLeft: 24
  }
});