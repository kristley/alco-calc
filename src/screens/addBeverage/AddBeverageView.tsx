import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BeverageInputs from './components/beverageInput/BeverageInputs';
import PrefabList from './components/prefabList/PrefabList';
import BeverageProvider from './providers/BeverageProvider';
import PrefabsProvider from './providers/PrefabsProvider';

export default function AddBeverageView() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Add beverage</Text>
      <BeverageProvider>
        <BeverageInputs />
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
