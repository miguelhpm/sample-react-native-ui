/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Navigator from 'react-native-easy-router'
import Screen1 from './Screen1'
import Screen2 from './Screen2'

const App: () => React$Node = () => {
  return (
    <Navigator initialStack='Screen1' screens={{ Screen1, Screen2 }} />
  );  
};

export default App;
