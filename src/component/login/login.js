import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Button, Text } from 'native-base';

export class Login extends Component {
  render() {
    return (
          <Form>
            <Item>
              <Input placeholder="Username" />
            </Item>
            <Item last>
              <Input placeholder="Password" />
            </Item>
            <Button danger>
              <Text >Login! </Text>
            </Button>
          </Form>
    );
  }
}