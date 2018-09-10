import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

function is_minuteMax(lastState) {
  if(lastState == 50) {
    return true
  } else {
    return false
  }
}
function is_hourMax(lastState) {
  if(lastState == 23 ) {
    return true
  } else {
    return false
  }
}
function two_digit(value) {
  if(value < 10) {
    return '0' + value
  } else {
    return value
  }
}

export default class Clock extends Component {

  constructor(props) {
    super(props);
    this.state = {
       minute: 0,
       hour: 0,
       day: false
    };
  }

  componentDidMount() {

    setInterval( () => {
        if (is_minuteMax(this.state.minute) == false) {
          this.setState( prevState => ({
            minute: prevState.minute + 10
          }))
          //parseInt(this.state.hour) < 2 ? this.state.day = true : this.state.day = false
          this.set_day(this.state.hour)
        } else {
          if(is_hourMax(this.state.hour) == false) {
            this.setState( prevState => ({
              minute: 0,
              hour: prevState.hour + 1
            }))
          } else {
            this.setState( prevState => ({
              minute: 0,
              hour: 0
            }))

          }
        }
    }, 700)

  }

  set_day()  {
    this.props.set_style_map(this.state.hour);
  }

  render () {
    return (
      <View>
        <Text style={styles.clockstyle}>{two_digit(this.state.hour)}:{two_digit(this.state.minute)}</Text>

      </View>

    )
  }
}
const styles = StyleSheet.create({
  clockstyle: {
    fontSize: 16,
    marginTop: 10,
    marginLeft: 10,
    fontWeight: "700"
  }
})
