import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type RootStackNavigator = {
  Home: undefined;
  Recipes: undefined;
};

const Stack = createNativeStackNavigator<RootStackNavigator>();

export default Stack;
