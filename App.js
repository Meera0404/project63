import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function App() {

  return (
      <View>

        <HomeScreen />

      </View>
  );

}