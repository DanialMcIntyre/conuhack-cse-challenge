import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { registerRootComponent } from 'expo';

function generatePlainPassword(wordCount) {
    response= runPyScript('data to process');
    console.log(response);
    return 
}

function generateRandomPassword(passwordLength) {
  let symbols = [["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
                , ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
                , ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
                , ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "[", "]", ":", ";", ".", ">", ",", "<"]];
  let password = "";
  while(password.length < passwordLength) {
    let random1 = Math.random() * 4;
    let random2 = Math.random();
    if (random1 < 2) {
      random2 *= 26;
    } else if (random1 < 3) {
      random2 *= 10;
    } else {
      random2 *= 20;
    }
    password += symbols[Math.floor(random1)][Math.floor(random2)];
  }
  return password;
}

export default function App() {
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
