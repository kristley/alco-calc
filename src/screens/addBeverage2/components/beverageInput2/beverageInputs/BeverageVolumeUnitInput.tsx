import React from 'react';
import { View } from 'react-native';
import BeverageVolumeInput from './BeverageVolumeInput';
import BeverageUnitInput from './BeverageUnitInput';
import { beverageInput } from '../BeverageInputStyles';

export function BeverageVolumeUnitInput() {
  return (
    <View style={[beverageInput, { flexDirection: 'row', flex: 4 }]}>
      <BeverageVolumeInput />
      <BeverageUnitInput />
    </View>
  );
}
