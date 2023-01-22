import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

export default function Btn(prop = {Name}){
    return(
        <>
        <View style={styles.container}>

            <TouchableOpacity style={styles.button}>
                <Text style = {{fontSize: 20}}>{prop.Name}</Text>
            </TouchableOpacity>
            <StatusBar/>
        </View>
        </>

    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%"
        

    },
    button: {
        backgroundColor: "red",
        height: "100%",
        width: "100%",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center"
        
    },

});