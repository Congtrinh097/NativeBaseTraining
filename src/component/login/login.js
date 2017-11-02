import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Button, Text } from 'native-base';
import {View} from  'react-native'
export class Login extends Component {
  render() {
    return (
      <View style={{ padding: 10}}>
            <Item>
              <Input  placeholder="Username" />
            </Item>
            <Item last>
              <Input  placeholder="Password" />
            </Item>

            <Button danger  style={{ marginTop: 10, alignContent: 'center'}}
                    onPress={() =>alert('Clicked')}
            >
              <Text >Login! </Text>
            </Button>
      </View>
    );
  }
}