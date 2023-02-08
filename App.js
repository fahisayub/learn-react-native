import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Heading from './src/components/Heading';
import { useEffect, useState } from 'react';
import axios from 'axios'
import ListView from './src/components/ListView';
export default function App() {





  return (
    <View style={styles.container}>
      <Heading title={'My RNApp'} />
      <ListView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'indigo',
    alignItems: 'center',
  },

});
