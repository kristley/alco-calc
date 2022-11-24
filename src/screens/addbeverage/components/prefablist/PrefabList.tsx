import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { useGetPrefabs } from '../../Providers/prefabsProvider';
import AddPrefabButton from './AddPrefabButton';
import PrefabItem from './PrefabItem';

export default function PrefabList() {
  const prefabs = useGetPrefabs();

  return (
    <View style={[styles.container]}>
        <FlatList
          numColumns={3}
          data={[...prefabs, true].slice(0, 9)}
          renderItem={({ item }) => {
            return typeof item === 'boolean' ? <AddPrefabButton /> : <PrefabItem drink={item} />;
          }}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 2,
    justifyContent: 'space-between',
    padding: 20,
    zIndex: -1
  }
});
