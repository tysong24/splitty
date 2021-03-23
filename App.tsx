import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [people, setPeople] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Splitty!</Text>
      <TextInput
        onChangeText={(text) => {
          if (typeof text === 'number') {
            setPeople(text);
          }
        }}
        placeholder='Enter # of people'
        keyboardType='numeric'
        style={styles.input}
      />
      <StatusBar style='auto' />
    </View>
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
