import 'react-native-gesture-handler';
import React from "react";
import { StyleSheet } from "react-native";
import AlcoCalcView from "./src/screens/alcocalc/AlcoCalcView";
import AddBeverageView from "./src/screens/addbeverage/AddBeverageView";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

function AppContainer() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen
				name="AlcoCalcView"
				component={AlcoCalcView}
			/>
			<Stack.Screen
				name="AddBeverageView"
				component={AddBeverageView}
			/>
		</Stack.Navigator>
	);
}

export default function App() {
	return (
		<SafeAreaProvider style={styles.container}>
			<NavigationContainer>
				<AppContainer />
			</NavigationContainer>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#ddd",
		flex: 1,
	}
});