import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <Text>Hello Everyone!</Text>
=======
      <Text>This is test!</Text>
>>>>>>> 23eba3ec4e30725fa6b3acd619458d3ae6efb9e4
      <StatusBar style="auto" />
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
});
