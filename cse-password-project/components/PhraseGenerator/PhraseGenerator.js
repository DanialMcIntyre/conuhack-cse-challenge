import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { loadEnglish } from '../../english.mjs';
import { loadVerbs } from '../../verb.mjs';
import { loadAdverbs } from '../../adverbs.mjs';
import { loadSymbols } from '../../symbols.mjs';

function generatePhrasePassword() {
    const english = loadEnglish();
    const verb = loadVerbs()
    const adverbs = loadAdverbs();
    const symbols = loadSymbols();
    //SVO A
    let password = "";
    let symbol1 = symbols[Math.floor(Math.random() * 25)]
    let subjectWord = english[Math.floor(Math.random()*1462)][0]
    let subjectWord1 = subjectWord.slice(0, subjectWord.length / 2)
    let subjectWord2 = subjectWord.slice(subjectWord.length / 2, subjectWord.length)
    password += subjectWord1 + symbol1 + subjectWord2

    let symbol2 = symbols[Math.floor(Math.random() * 25)]
    let verbWord = verb[Math.floor(Math.random()*635)][0];
    let verbWord1 = verbWord.slice(0, verbWord.length / 2)
    let verbWord2 = verbWord.slice(verbWord.length / 2, verbWord.length)
    password += verbWord1 + symbol2 + verbWord2

    let symbol3 = symbols[Math.floor(Math.random() * 25)]
    let objectWord = english[Math.floor(Math.random()*1462)][0];
    let objectWord1 = objectWord.slice(0, objectWord.length / 2)
    let objectWord2 = objectWord.slice(objectWord.length / 2, objectWord.length)
    password += objectWord1 + symbol3 + objectWord2

    let symbol4 = symbols[Math.floor(Math.random() * 25)]
    let adverbWord = adverbs[Math.floor(Math.random()*431)];
    let adverbWord1 = adverbWord.slice(0, adverbWord.length / 2)
    let adverbWord2 = adverbWord.slice(adverbWord.length / 2, adverbWord.length)
    password += adverbWord1 + symbol4 + adverbWord2

    return password;
    /*for (let i = 0; i < phraseLength; i++) {
        let randomWord = Math.random()*1526;
        password += english[Math.floor(randomWord)];
    }
    let random = Math.floor(Math.random()*1000);
    password += random;
    return password;*/
}
  
  export default function PhraseGenerator() {
    const [result, setResult] = useState();
    const regen = () =>{
          setResult(generatePhrasePassword(3));
      }
    return (
      <View style={styles.container}>
        <Text>Phrase Generator</Text>
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