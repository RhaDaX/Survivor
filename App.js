import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, ImageBackground, StatusBar, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import MapScreen from './components/MapScreen';
import HomeScreen from './components/HomeScreen';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    TheMap: MapScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
// skip this line if using Create React Native App
AppRegistry.registerComponent('OSMapp', () => App);
