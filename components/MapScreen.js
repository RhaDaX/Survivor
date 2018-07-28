import React, { Component } from 'react';
import { Text, AppRegistry } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import MapView from 'react-native-maps';

export default class MapScreen extends Component {
  static navigationOptions = {
    header: null
  }
  render () {
    return (
      <MapView
         initialRegion={{
           latitude: 37.78825,
           longitude: -122.4324,
           latitudeDelta: 0.0922,
           longitudeDelta: 0.0421,
         }}
       />
    );
  }
}


AppRegistry.registerComponent('OSMapp', () => MapScreen);
