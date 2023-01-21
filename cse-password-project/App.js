import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { registerRootComponent } from 'expo';
import RandomGenerator from './components/RandomGenerator/RandomGenerator';

function generatePlainPassword(wordCount) {
    response= runPyScript('data to process');
    console.log(response);
    return 
}


export default function App() {
  const english = loadEnglish();
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      
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
