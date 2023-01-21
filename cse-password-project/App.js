import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import jQuery from 'node_modules/jquery/dist/jquery.js';

function runPyScript(input){
    var jqXHR = $.ajax({
        type: "POST",
        url: "/pandareader.py",
        async: false,
        data: { param: input }
    });

    return jqXHR.responseText;
}

function generatePlainPassword(wordCount) {
    response= runPyScript('data to process');
    console.log(response);
    return 
}


export default function App() {
  const result = runPyScript();
  return (
    <View style={styles.container}>
      <script src="jquery-3.6.1.js"></script>
      <Text>Open up App.js to start working on your app!</Text>
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
