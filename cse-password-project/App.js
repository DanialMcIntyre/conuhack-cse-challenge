import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  let pass = "testingpass";

  let possibleChars = 92;
  let length = pass.length;
  let keysPerSecond = 1000000000;

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
    <View style={styles.container}>
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
