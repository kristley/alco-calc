import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BeverageInput from './components/beverageinput/BeverageInput';
import PrefabList from './components/prefablist/PrefabList';
import BeverageProvider from './Providers/BeverageProvider';
import PrefabsProvider from './Providers/PrefabsProvider';

export default function AddBeverageView() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Add beverage</Text>
      <BeverageProvider>
        <BeverageInput />
        <PrefabsProvider>
          <PrefabList />
        </PrefabsProvider>
      </BeverageProvider>
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
