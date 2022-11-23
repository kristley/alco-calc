import React from 'react';
import { StyleSheet, View } from 'react-native';
import BeverageNameInput from './BeverageNameInput';
import BeveragePercentageInput from './BeveragePercentageInput';
import BeverageVolumeInput from './BeverageVolumeInput';
import AddBeverageButton from './AddBeverageButton';
import BeverageUnitInput from './BeverageUnitInput';
import BeverageColorInput from './BeverageColorInput';
import { beverageInput } from './BeverageInputStyles';

export default function BeverageInput() {
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

function BeverageVolumeUnitInput() {
  return (
    <View style={[beverageInput, { flexDirection: 'row', flex: 4 }]}>
      <BeverageVolumeInput/>
      <BeverageUnitInput/>
    </View>
  );
}

const styles = StyleSheet.create({
  colorInput: {
    backgroundColor: '#f00',
    borderRadius: 15,
    height: 30,
    width: 30
  },
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
