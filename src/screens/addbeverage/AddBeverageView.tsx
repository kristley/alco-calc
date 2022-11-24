import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BeverageInput from './components/beverageinput/BeverageInput';
import PrefabList from './components/prefablist/PrefabList';
import DrinkProvider from './Providers/DrinkProvider';
import PrefabsProvider from './Providers/prefabsProvider';

type Drink = {
  beverage: string;
  volume: string;
  unit: string;
  percentage: string;
  color: Color;
};
export default function AddBeverageView() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Add beverage</Text>
      <DrinkProvider>
        <BeverageInput />
        <PrefabsProvider>
          <PrefabList />
        </PrefabsProvider>
      </DrinkProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 50
  },
  header: {
    flex: 1,
    fontSize: 30,
    textAlign: 'center'
  }
});
