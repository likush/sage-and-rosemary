import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { HomeStackParamList } from '../../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<HomeStackParamList, 'Home'>;

const HomeScreen = (props: Props) => {
  const { navigation } = props;
  const goToList = () => navigation.navigate('ShoppingList');

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={goToList}>
        <Text>Go to shopping list</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
