import React from 'react';
import { View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TabStackParamList } from '../../App';

type Props = NativeStackScreenProps<TabStackParamList, 'Recipes'>;

const RecipesScreen = (props: Props) => {
  console.log(props);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Recipes Screen</Text>
    </View>
  );
};

export default RecipesScreen;
