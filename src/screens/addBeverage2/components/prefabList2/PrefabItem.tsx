import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { useSetBeverage } from '../../providers2/BeverageProvider';
import { useSetPrefabs } from '../../providers2/PrefabsProvider';

type PrefabItemProps = {
  beverage: Beverage;
};

export default function PrefabItem({ beverage }: PrefabItemProps) {
  const setDisplayedDrink = useSetBeverage();
  const setPrefabs = useSetPrefabs();

  const openDeleteWindow = () => {
    Alert.alert(
      'Delete beverage?',
      'Are you sure you want to permanently delete this beverage template?',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'OK',
          onPress: () => // remove beverage from prefabs
            setPrefabs((prev) => prev.filter((d) => d !== beverage))
            
        }
      ]
    );
  };


  return (
    <TouchableOpacity onPress={() => setDisplayedDrink(beverage)} onLongPress={openDeleteWindow}>
      <View style={[styles.container, { borderColor: beverage.color }]}>
        <View style={styles.nameContainer}>
          <Text style={styles.beverageName} adjustsFontSizeToFit={true}>
            {beverage.name}
          </Text>
        </View>
        <View style={styles.volumeAndPercentageContainer}>
          <Text style={styles.beveragePercentage} adjustsFontSizeToFit={true}>
            {beverage.percentage + '%'}
          </Text>
          <Text style={styles.beverageVolume} adjustsFontSizeToFit={true}>
            {beverage.volume + beverage.unit}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  beverageName: {
    color: '#121212',
    textAlign: 'center'
  },
  beveragePercentage: {
    flex: 1,
    fontSize: 12,
    textAlign: 'center'
  },
  beverageVolume: {
    flex: 1,
    fontSize: 12,
    textAlign: 'center'
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#E6E6E6',
    borderRadius: 15,
    borderWidth: 2,
    display: 'flex',
    height: 80,
    justifyContent: 'space-around',
    margin: 10,
    marginVertical: 5,
    textAlign: 'center',
    width: 90,
    zIndex: -1
  },
  nameContainer: {
    flex: 2,
    justifyContent: 'center'
  },
  volumeAndPercentageContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});
