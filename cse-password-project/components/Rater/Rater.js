import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, {useEffect, useState} from 'react';
import { loadEnglish } from '../../english.mjs';
import { loadWordTrie } from '../../wordtrie.mjs';

function inTrie(trie, word, length) {
  let trieKeys = Object.keys(trie);
  if (word.length != 0){
    for(let i = 0; i < trieKeys.length; i++) {
      if (trieKeys[i] == word.charAt(0)) {
        length += 1;
        return inTrie(trie[word.charAt(0)], word.substring(1, word.length), length);
      }
    }
    return [0, length];
  } else  {
    
    for(let i = 0; i < trieKeys.length; i++) {
      if (trieKeys[i] == ".") {
        return [1, length];
      }
    }
    return [0, length];
  } 
}

function inArray(array, value) {
  for(let i = 0; i < array.length; i++) {
    if(array[i] == value) {
      return true;
    }
  }
  return false
}

export default function Rater() {

    const [pass, setPass] = useState('');
    //const [length, setLength] = useState(0);
    const wordTrie = loadWordTrie();
    
    //List of words
    const listOfWords = loadEnglish()

    const changedPassword = (newText) => {
      console.log(length);
      setPass(newText);
    }

    let newPass = pass;
    let length = pass.length
    for (let i = 0; i < pass.length; i++) {
      for (let j = 0; j < pass.length-i; j++) {
        const resultArray = inTrie(wordTrie, pass.substring(j, j+i+1), 0);
        if(resultArray[0] == 1) {
          length = length - resultArray[1] + 1;
          console.log(resultArray);
        }
      }
    }
    
    //Testing variables
    let possibleChars = 92;
    let keysPerSecond = 1000000000;

    //Calculates time to crack
    let seconds = Math.pow(possibleChars, length) / keysPerSecond;

    let minutes = Math.floor(seconds / 60)
    seconds = seconds % 60

    let hours = Math.floor(minutes / 60)
    minutes = minutes % 60

    let days = Math.floor(hours / 24)
    hours = hours % 24

    let months = Math.floor(days / 30);
    days = days % 30

    let years = Math.floor(months / 12)
    months = months % 12

    

    return (
      <View style={styles.container}><StatusBar style="auto" />
      <TextInput
        style={{height: 40}}
        onChangeText={newText => changedPassword(newText)}
        defaultValue={"E"} 
      />
        <Text>{length}</Text>
        <Text>Years: {years}, Months: {months}, Days: {days}, Hours: {hours}, Minutes: {minutes}, Seconds: {seconds}</Text>
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