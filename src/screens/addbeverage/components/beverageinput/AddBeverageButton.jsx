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
    <View style={styles.container}>
      <TouchableOpacity
        onPress={addBeverage}
        style={styles.button}
      >
        {
          completeDrink ?
            <View style={styles.rect5}>
              <Text style={styles.add2}>Add +</Text>
            </View> :
            <View style={styles.rect6}>
              <Text style={styles.add3}>Add +</Text>
            </View>
        }

      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 80,
    height: 27,
  },
  rect5: {
    width: 80,
    height: 27,
    backgroundColor: "rgba(190,89,163, 1)",
    borderRadius: 10
  },
  rect6: {
    width: 80,
    height: 27,
    backgroundColor: "rgba(190, 89, 163, 0.2)",
    borderRadius: 10
  },
  add2: {
    color: "#rgba(18, 18, 18, 1)",
    marginTop: 5,
    marginLeft: 24
  },
  add3: {
    color: "#rgba(18, 18, 18, 0.2)",
    marginTop: 5,
    marginLeft: 24
  }
});