import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { loadEnglish } from '../../english.mjs';

function generatePlainTextPassword(phraseLength) {
    let english = loadEnglish();
    let password = "";
    for (let i = 0; i < phraseLength; i++) {
        let randomWord = Math.random()*1526;
        password += english[Math.floor(randomWord)];
    }
    let random = Math.floor(Math.random()*1000);
    password += random;
    return password;
}
  
  export default function PlainTextGenerator() {
    const [result, setResult] = useState();
    const regen = () =>{
          setResult(generatePlainTextPassword(3));
      }
    return (
      <View style={styles.container}>
        <Text style={{fontFamily: 'Courier New', fontSize: 24}}>Plain Text Generator</Text>
        <Button onPress={() => regen()} title="Generate!"></Button>
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
      fontFamily: 'Courier New',
      backgroundColor: '#B9ffff'
    },
  });