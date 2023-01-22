import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { loadEnglish } from '../../english.mjs';

function break_word(word) {
    let syllables = [];
    let next_vowel = 0;
    let previous = 0;
    let point = 0;

    for (let i = 0; i < word.length; i++) {
        if (i > point) {
            let last_vowel = true;
            if (word.charAt(i) == "a" || word.charAt(i) == "e" || word.charAt(i) == "i" || word.charAt(i) == "o" || word.charAt(i) == "u") {
                let present_vowel = i;
                for (let j = i+1; j < word.length; j++) {
                    if (word.charAt(j) == "a" || word.charAt(j) == "e" || word.charAt(j) == "i" || word.charAt(j) == "o" || word.charAt(j) == "u") {
                        if (j != i + 1) {
                            next_vowel = j - 1
                            last_vowel = false;
                            break;
                        }
                    }
                }

                if (!last_vowel) {
                    point = Math.floor((present_vowel + next_vowel) / 2);
                    syllables.push(word.substring(previous, point+1));
                    previous = point + 1;
                } else {
                    syllables.push(word.substring(previous, word.length));
                    break;
                }
            }
        }
    }
    return syllables;
}

function generateSyllableScramblePassword() {
    const english = loadEnglish();
    
    let syllables = []
    for (let i = 0; i < 3; i++) {
        let randomWord = Math.floor(Math.random()*1526);
        syllables.push(break_word(english[randomWord][0]));
    }
    console.log(syllables);

    return 
}
  
  export default function SyllableScrambleGenerator() {
    const [result, setResult] = useState();
    const regen = () =>{
          setResult(generateSyllableScramblePassword());
    }
    return (
      <View style={styles.container}>
        <Text>Syllable Scramble Generator</Text>
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