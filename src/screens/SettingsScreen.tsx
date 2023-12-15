import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TabStackParamList } from '../../App';

type Props = NativeStackScreenProps<TabStackParamList, 'Settings'>;

const SettingsScreen = (props: Props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
      <TouchableOpacity onPress={() => console.log('settings', props)}>
        <Text>Press</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;
