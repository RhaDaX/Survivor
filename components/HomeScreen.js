import React, {Component} from 'react';
import {AppRegistry, Text, Button, ImageBackground, StatusBar, StyleSheet} from 'react-native';
import { createStackNavigator } from 'react-navigation';


export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
        <ImageBackground source={require('./../img/apocalipse.png')} style={styles.home_bg}>
          <StatusBar hidden={true}/>
          <Text style={styles.home_text}>Survivor</Text>
          <Button
            onPress={() => this.props.navigation.navigate('TheMap')}
            title =  'Démarrer'
            color = 'white'
            marginTop = '90'
          />
        </ImageBackground>
    );
  }
}


const styles = StyleSheet.create({
  home_text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
    marginBottom: 90,

  },
  home_bg: {
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  }
});


AppRegistry.registerComponent('OSMapp', () => HomeScreen);
