import React from 'react';
import { StyleSheet, View } from 'react-native';
import BeverageNameInput from './beverageInputs/BeverageNameInput';
import BeveragePercentageInput from './beverageInputs/BeveragePercentageInput';
import AddBeverageButton from './AddBeverageButton';
import BeverageColorInput from './beverageInputs/BeverageColorInput';
import { BeverageVolumeUnitInput } from './beverageInputs/BeverageVolumeUnitInput';

export default function BeverageInputs() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <BeverageNameInput />
      </View>
      <View style={styles.row}>
        <BeveragePercentageInput />
        <BeverageVolumeUnitInput />
        <AddBeverageButton />
      </View>
      <BeverageColorInput />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  }
});
