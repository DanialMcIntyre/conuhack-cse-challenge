import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Rater from './components/Rater/Rater.js';

export default function App() {

  return (
    <View style={styles.container}><StatusBar style="auto" />
      <Rater></Rater>
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
