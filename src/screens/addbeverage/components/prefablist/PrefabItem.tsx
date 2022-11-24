import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { removePrefab } from '../../../../api/apiService';
import { useSetDrink } from '../../Providers/DrinkProvider';

type PrefabItemProps = {
  drink: Drink;
};

export default function PrefabItem({ drink }: PrefabItemProps) {
  const setDisplayedDrink = useSetDrink();

  const openDeleteWindow = () => {
    Alert.alert(
      'Delete drink?',
      'Are you sure you want to permanently delete this drink template?',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'OK',
          onPress: async () => await removePrefab(drink)
        }
      ]
    );
  };


  return (
    <TouchableOpacity onPress={() => setDisplayedDrink(drink)} onLongPress={openDeleteWindow}>
      <View style={[styles.container, { borderColor: drink.color }]}>
        <View style={styles.nameContainer}>
          <Text style={styles.beverageName} adjustsFontSizeToFit={true}>
            {drink.beverage}
          </Text>
        </View>
        <View style={styles.volumeAndPercentageContainer}>
          <Text style={styles.beveragePercentage} adjustsFontSizeToFit={true}>
            {drink.percentage + '%'}
          </Text>
          <Text style={styles.beverageVolume} adjustsFontSizeToFit={true}>
            {drink.volume + drink.unit}
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
