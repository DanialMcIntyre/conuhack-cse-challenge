import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { loadEnglish } from './english.mjs';

function generateRandomPassword(phraseLength) {
    let english = loadEnglish();
    let phrase = "";
    let password = "";
    let random = 1525;
    for (let i = 0; i < phraseLength; i++) {
        random = Math.random()*1526;
        password += english[Math.floor(random)][0];
    }
    random = Math.floor(Math.random()*1000);
    
    return password;
  }
  
  export default function PlainTextGenerator() {
    const [result, setResult] = useState();
    const regen = () =>{
          setResult(generateRandomPassword(10));
      }
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Button onPress={() => regen()} title="generate"></Button>
        <Text>{result}</Text>
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