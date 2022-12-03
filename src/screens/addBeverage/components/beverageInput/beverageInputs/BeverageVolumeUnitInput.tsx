import React from 'react';
import { View } from 'react-native';
import { beverageInput } from '../BeverageInputStyles';
import BeverageUnitInput from './BeverageUnitInput';
import BeverageVolumeInput from './BeverageVolumeInput';

export function BeverageVolumeUnitInput() {
  return (
    <View style={[beverageInput, { flexDirection: 'row', flex: 4 }]}>
      <BeverageVolumeInput />
      <BeverageUnitInput />
    </View>
  );
}
