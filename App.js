 import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import Home from './screens/Home';


export default function App() { 
  return (
    
    <SafeAreaView>
      <Home/>
      

      <StatusBar/>
      
    </SafeAreaView>
  );
}
