import React, { Component } from 'react';
import { Text, AppRegistry, StyleSheet, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker, Callout } from 'react-native-maps';
import Clock from './Clock'
import DayStyle from './MapStyles/day.json';
import NightStyle from './MapStyles/night.json';

export default class MapScreen extends Component {
  constructor() {
    super();
    this.state = {
      region: {
        latitude: 44.197263,
        longitude: 0.620840,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    };
  }
  static navigationOptions = {
    header: null
  }
  render () {
    return (
      <MapView
          style={{flex: 1, width: '100%', height: '100%'}}
          customMapStyle= { DayStyle }
          provider={PROVIDER_GOOGLE}
          initialRegion={{
           latitude: 44.197263,
           longitude: 0.620840,
           latitudeDelta: 0.0922,
           longitudeDelta: 0.0421,
         }}
       >
          <Clock time={this.state.hour}/>
          <MapView.Marker
             coordinate={this.state.region}
             image={require('../img/gas-mask.png')}
          >
             <MapView.Callout>
               <View style={styles.viewStyle}>
                  <Text style={styles.textStyle}>
                    info:
                  </Text>
                  <Text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </Text>
                </View>
             </MapView.Callout>
          </MapView.Marker>

      </MapView>
    );
  }
}
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 16,
    alignSelf: 'center',
    padding: 5
  },
  viewStyle: {
    width: 200,
    height: 250,
    backgroundColor: "#fff",
    padding: 20
  }
})

AppRegistry.registerComponent('OSMapp', () => MapScreen);
