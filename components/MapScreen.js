import React, { Component } from 'react';
import { Text, AppRegistry, StyleSheet, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker, Callout, UrlTile } from 'react-native-maps';
import Clock from './Clock';
import DayStyle from './MapStyles/day.json';
import NightStyle from './MapStyles/night.json';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_KEY = 'AIzaSyB5lBJ6TPOzrgRMoZ3z7CoCMmw5L-PYffI';

export default class MapScreen extends Component {
  constructor() {
    super();
    this.state = {
      is_night: NightStyle,
      night: 'true',
      day: 0,
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

  set_style_map = (day) => {

    this.setState({
      day: day
    })

    if(parseInt(this.state.day) <= 2){
      this.setState({
        is_night: NightStyle,
        night: 'true'
      })
    } else {
      this.setState({
        is_night: DayStyle,
        night: 'false'
      })
    }
  }

  // componentDidMount () {
  //   setInterval( () => {
  //     if(parseInt(this.state.day) <= 2){
  //       this.setState({
  //         is_night: NightStyle,
  //         night: 'true'
  //       })
  //     } else {
  //       this.setState({
  //         is_night: DayStyle,
  //         night: 'false'
  //       })
  //     }
  //   }, 700)
  // }
  update() {
    setInterval( () => {
    if(parseInt(this.state.day) <= 2){
      this.setState({
        is_night: NightStyle,

      })
    } else {
      this.setState({
        is_night: DayStyle,

      })
    }
    }, 700)
  }

  render () {
    return (

      <MapView
          style={{flex: 1, width: '100%', height: '100%'}}
          customMapStyle= {this.state.is_night}
          provider={PROVIDER_GOOGLE}
          showsPointsOfInterest={true}
          onPoiClick={ () => console.log('cliclicli') }
          initialRegion={{
           latitude: 44.197263,
           longitude: 0.620840,
           latitudeDelta: 0.0122,
           longitudeDelta: 0.0121,
         }}
       >
         <MapViewDirections
           origin={{latitude: 44.197263, longitude: 0.620840}}
           destination={{latitude: 44.205966, longitude: 0.619872}}
           apikey={GOOGLE_MAPS_KEY}
          />

          <Clock  set_style_map={this.set_style_map}/>
          <Text style={styles.textStyle}>{this.state.night}</Text>
          <Text style={styles.textStyle}>{(this.state.day)}</Text>
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
  container: {
    flex: 1,
  },
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
