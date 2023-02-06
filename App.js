import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Heading from './src/components/Heading';
import Listview from './src/components/Listview';

export default function App() {
  return (
    <View style={styles.container}>
      <Heading title={'My RNApp'}/>
      <Listview/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'indigo',
    alignItems: 'center',
  },
  text:{
    fontWeight:'bold',
    fontSize:50,
    textAlign:'center',
    color:'green'
  }
});
