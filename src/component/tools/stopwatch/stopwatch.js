import React, { Component } from 'react';
import { StyleSheet,View, TouchableHighlight } from 'react-native';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
import {Button, Icon, Left, Right, Text} from 'native-base';

export class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerStart: false,
      stopwatchStart: false,
      totalDuration: 90000,
      timerReset: false,
      stopwatchReset: false,
    };
    this.toggleTimer = this.toggleTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.toggleStopwatch = this.toggleStopwatch.bind(this);
    this.resetStopwatch = this.resetStopwatch.bind(this);
  }

  toggleTimer() {
    this.setState({timerStart: !this.state.timerStart, timerReset: false});
  }

  resetTimer() {
    this.setState({timerStart: false, timerReset: true});
  }

  toggleStopwatch() {
    this.setState({stopwatchStart: !this.state.stopwatchStart, stopwatchReset: false});
  }

  resetStopwatch() {
    this.setState({stopwatchStart: false, stopwatchReset: true});
  }

  getFormattedTime(time) {
    this.currentTime = time;
  };

  render() {
    return (
      <View>
        <Stopwatch laps msecs start={this.state.stopwatchStart}
                   reset={this.state.stopwatchReset}
                   options={options}
                   getTime={this.getFormattedTime}
                   />

        <Button block onPress={this.toggleStopwatch} style={{margin: 30}}>
          <Left>
            <Icon active name={!this.state.stopwatchStart ? "play" : "pause"} style={{color: "#fafcfe", marginLeft: 10}}/>
          </Left>
          <Text style={{fontSize: 20}}>{!this.state.stopwatchStart ? "Start" : "Stop"}</Text>
          <Right/>
        </Button>

        <Button block onPress={this.resetStopwatch} style={{margin: 30}}>
          <Left>
            <Icon active name="refresh" style={{color: "#fafcfe", marginLeft: 10}}/>
          </Left>
          <Text style={{fontSize: 20}}>RESET</Text>
          <Right/>
        </Button>
        {/*<Timer totalDuration={this.state.totalDuration} msecs start={this.state.timerStart}*/}
               {/*reset={this.state.timerReset}*/}
               {/*options={options}*/}
               {/*handleFinish={handleTimerComplete}*/}
               {/*getTime={this.getFormattedTime} />*/}
        {/*<TouchableHighlight onPress={this.toggleTimer}>*/}
          {/*<Text style={{fontSize: 30}}>{!this.state.timerStart ? "Start" : "Stop"}</Text>*/}
        {/*</TouchableHighlight>*/}
        {/*<TouchableHighlight onPress={this.resetTimer}>*/}
          {/*<Text style={{fontSize: 30}}>Reset</Text>*/}
        {/*</TouchableHighlight>*/}
      </View>
    );
  }
}

const handleTimerComplete = () => alert("custom completion function");

const options = {
  container: {
    backgroundColor: '#000',
    padding: 20,
    borderRadius: 5,
    width: null,
    height: 100,
    margin: 30
  },
  text: {
    fontSize: 40,
    color: '#FFF',
    marginLeft: 7,
  }
};
