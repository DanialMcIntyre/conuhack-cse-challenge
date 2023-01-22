import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Rater from './components/Rater/Rater.js';
import Generator from './components/Generator/Generator';
import Home from './screens/Home';

export default function App() {

  return (
    <View style={styles.container}>
      <Rater></Rater>
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
