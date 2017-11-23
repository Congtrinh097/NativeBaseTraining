import React, {Component} from 'react';
import {Button, Text, View} from 'native-base'

export default class MoneyInput extends Component {

  componentWillMount() {
    this.setState({
      price: '',
      isShow: false
    })
  }

  mot() {
    this.setState({price: this.state.price + '1'})
  }

  hai() {
    this.setState({price: this.state.price + '2'})
  }

  ba() {
    this.setState({price: this.state.price + '3'})
  }

  bon() {
    this.setState({price: this.state.price + '4'})
  }

  nam() {
    this.setState({price: this.state.price + '5'})
  }

  sau() {
    this.setState({price: this.state.price + '6'})
  }

  bay() {
    this.setState({price: this.state.price + '7'})
  }

  tam() {
    this.setState({price: this.state.price + '8'})
  }

  chin() {
    this.setState({price: this.state.price + '9'})
  }

  onezero() {
    this.setState({price: this.state.price + '0'})
  }

  twozero() {
    this.setState({price: this.state.price + '00'})
  }

  threezero() {
    this.setState({price: this.state.price + '000'})
  }

  delete() {
    let lenght = this.state.price.length;
    let valuestring = this.state.price.slice(0, lenght - 1);
    this.setState({price: valuestring});
  }

  reset() {
    this.setState({price: ''})
  }

  ok() {
    // this.props.onValueChange(this.state.price);
    this.hide()
  }

  show() {
    this.setState({isShow: true});
  }

  hide() {
    this.setState({isShow: false});
  }

  render() {

    return (
      this.state.isShow ?
        <View>
          <View style={styles.valuecontainer}>
            <Text style={styles.value}>{this.state.price}</Text>
          </View>

          <View style={styles.padContainer}>
            <View style={styles.buttonRow}>
              <Button onPress={this.mot.bind(this)} style={styles.button}>
                <Text style={styles.label}>1</Text>
              </Button>
              <Button onPress={this.hai.bind(this)} style={styles.button}>
                <Text style={styles.label}>2</Text>
              </Button>
              <Button onPress={this.ba.bind(this)} style={styles.button}>
                <Text style={styles.label}>3</Text>
              </Button>
            </View>
            <View style={styles.buttonRow}>
              <Button onPress={this.bon.bind(this)} style={styles.button}>
                <Text style={styles.label}>4</Text>
              </Button>
              <Button onPress={this.nam.bind(this)} style={styles.button}>
                <Text style={styles.label}>5</Text>
              </Button>
              <Button onPress={this.sau.bind(this)} style={styles.button}>
                <Text style={styles.label}>6</Text>
              </Button>
            </View>
            <View style={styles.buttonRow}>
              <Button onPress={this.bay.bind(this)} style={styles.button}>
                <Text style={styles.label}>7</Text>
              </Button>
              <Button onPress={this.tam.bind(this)} style={styles.button}>
                <Text style={styles.label}>8</Text>
              </Button>
              <Button onPress={this.chin.bind(this)} style={styles.button}>
                <Text style={styles.label}>9</Text>
              </Button>
            </View>
            <View style={styles.buttonRow}>
              <Button onPress={this.onezero.bind(this)} style={styles.button}>
                <Text style={styles.label}>0</Text>
              </Button>
              <Button onPress={this.twozero.bind(this)} style={styles.button}>
                <Text style={styles.label}>00</Text>
              </Button>
              <Button onPress={this.threezero.bind(this)} style={styles.button}>
                <Text style={styles.label}>000</Text>
              </Button>
            </View>
            <View style={styles.buttonRow}>
              <Button onPress={this.delete.bind(this)} style={styles.button}>
                <Text style={styles.label}>C</Text>
              </Button>
              <Button onPress={this.reset.bind(this)} style={styles.button}>
                <Text style={styles.label}>X</Text>
              </Button>
              <Button onPress={this.ok.bind(this)} style={styles.button}>
                <Text style={styles.label}>OK</Text>
              </Button>
            </View>
          </View>
        </View> : null
    )
  }
}

const styles = {
  padContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    flex: 1,
    justifyContent: 'center'
  },
  label: {
    textAlign: 'center',
    fontSize: 20,
    alignSelf: 'center'
  },
  valuecontainer: {
    width: null,
    height: 50,
    justifyContent: 'center'
  },
  value: {
    textAlign: 'left',
    fontSize: 30
  }
}