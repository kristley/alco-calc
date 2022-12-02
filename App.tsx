/* eslint-disable no-unused-vars */
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import AlcoCalcView from './src/screens/alcocalc/AlcoCalcView';
import AddBeverageView from './src/screens/addbeverage/AddBeverageView';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

function AppContainer() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AlcoCalcView" component={AlcoCalcView} />
      <Stack.Screen name="AddBeverageView" component={AddBeverageView} />
    </Stack.Navigator>
  );
}

// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import NightsProvider from './src/screens/alcocalc/providers/NightsProvider';

// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: 'AIzaSyA-nJsv70aEY97lR9GDhfuJEbwY2lrkbUk',

  authDomain: 'alcocalc-a019a.firebaseapp.com',

  projectId: 'alcocalc-a019a',

  storageBucket: 'alcocalc-a019a.appspot.com',

  messagingSenderId: '20427422226',

  appId: '1:20427422226:web:4ae1313a6ccaff3a5bb6cb',

  measurementId: 'G-ZEF4DYE8PZ'
};

// Initialize Firebase

// const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);

// const db = getFirestore(app);

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <NightsProvider>
        <NavigationContainer>
          <AppContainer />
        </NavigationContainer>
      </NightsProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    flex: 1
  }
});
