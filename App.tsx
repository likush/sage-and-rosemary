import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, ScrollView, StatusBar, Text } from 'react-native';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <StatusBar />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Text>The app will be here</Text>
        </ScrollView>
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
