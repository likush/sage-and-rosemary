import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen, RecipesScreen, SettingsScreen, ShoppingListScreen } from './src/screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type HomeStackParamList = {
  Home: undefined;
  ShoppingList: undefined;
};

export type TabStackParamList = {
  Home: undefined;
  Settings: undefined;
  Recipes: undefined;
}

const ListNavigator = () => {
  const Stack = createNativeStackNavigator<HomeStackParamList>();

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ShoppingList" component={ShoppingListScreen} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  const Tabs = createBottomTabNavigator<TabStackParamList>();

  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Settings" component={SettingsScreen} />
      <Tabs.Screen name="Home" component={ListNavigator} />
      <Tabs.Screen name="Recipes" component={RecipesScreen} />
    </Tabs.Navigator>
  );
};

function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <TabNavigator />

    </NavigationContainer>
  );
}

export default App;
