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
import MainScreen from './src/screens/MainScreen'
import NativeBaseScreen from './src/screens/NativeBaseScreen'
import RNElementsScreen from './src/screens/RNElementsScreen'
import RNVectorIconsScreen from './src/screens/RNVectorIconsScreen'
import UIKittenScreen from './src/screens/UIKittenScreen'

const App: () => React$Node = () => {
  return (
    <Navigator initialStack='MainScreen' screens={{ MainScreen, RNVectorIconsScreen, NativeBaseScreen, RNElementsScreen, UIKittenScreen }} />
  );  
};

export default App;
