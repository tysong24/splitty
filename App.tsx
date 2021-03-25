import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './src/components/Welcome';
import People from './src/components/People';
import Items from './src/components/Items';
import List from './src/components/List';

const Stack = createStackNavigator();

export default function App() {
  const [items, setItems] = useState(0);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Welcome} />
        <Stack.Screen name='People' component={People} />
        <Stack.Screen
          name='Items'
          component={Items}
          initialParams={[items, setItems]}
        />
        <Stack.Screen name='List' component={List} />
      </Stack.Navigator>
      <StatusBar style='auto' />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'darkgrey',
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 0,
    textAlignVertical: 'center',
  },
});
