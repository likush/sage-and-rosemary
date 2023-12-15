import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../App';

type Props = NativeStackScreenProps<HomeStackParamList, 'ShoppingList'>;

const ShoppingListScreen = (props: Props) => {
  const { navigation: { goBack } } = props;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Shopping List Screen</Text>
      <TouchableOpacity onPress={goBack}>
        <Text>go back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ShoppingListScreen;
