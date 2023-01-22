import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import RandomGenerator from '../RandomGenerator/RandomGenerator';
import PlainTextGenerator from '../PlainTextGenerator/PlainTextGenerator';
import PhraseGenerator from '../PhraseGenerator/PhraseGenerator';

export default function Generator() {
  return (
    <View style={styles.container}>
      <PlainTextGenerator></PlainTextGenerator>
      <RandomGenerator></RandomGenerator>
      <PhraseGenerator></PhraseGenerator>
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
    backgroundColor: '#B9ffff'
  },
});
