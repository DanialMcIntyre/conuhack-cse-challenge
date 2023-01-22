import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import Title from '../components/Title/Title';
import Btn from '../components/Btn/Btn';
import Generator from '../components/Generator/Generator';

export default function Home() { 
  return (
    
    <SafeAreaView style={styles.container}>
        
        <View style={styles.titleContainer}>
            <Title title="Pass Mastermind"/>
        </View>

        <View>
            <Generator/>
        </View>

        <View style={styles.raterButtonContainer}>
            <Btn Name ="Password Rater"/>
        </View>
        <View style = {styles.generatorButtonContainer}>
            <Btn Name = "Password Generator"/>
        </View>
        


      <StatusBar/>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
    container: {
        top: "5%",
        height: "100%",
        width: "100%",
    },
    titleContainer: {
        height: "20%"
    },
    raterButtonContainer: {
        left: "5%",
        height: "10%",
        width: "40%",
        top: "55%"
        
    },
    generatorButtonContainer:{
        height: "10%",
        width: "40%",
        top: "45%",
        left: "55%"
    }

    
})