import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

export default function Title(props = {title}){
    return(
        <>
        <View style={styles.container}>

            <Text style={styles.title}>{props.title}</Text>
            <StatusBar/>
        </View>
        </>

    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        top: 0,
        backgroundColor: "blue",
    },
    title: {
        display: "flex",
        color: "white",
        
        fontSize: 50,
    },

});