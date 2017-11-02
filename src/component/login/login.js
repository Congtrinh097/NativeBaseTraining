import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Button, Text, Left,Right, Icon,Body, Title } from 'native-base';
import {View} from  'react-native'
export class Login extends Component {
  render() {
    return (
      <Container>
      <Header>
        <Left>
          <Button
            transparent
            onPress={() => this.props.navigation.navigate("DrawerOpen")}
          >
            <Icon name="ios-menu" />
          </Button>
        </Left>
        <Body>
        <Title>Đăng nhập</Title>
        </Body>
        <Right />

      </Header>
      <View style={{ padding: 10}}>
            <Item>
              <Input  placeholder="Tên đăng nhập" />
            </Item>
            <Item last>
              <Input  placeholder="mật khẩu" />
            </Item>

            <Button danger  style={{ marginTop: 10, alignContent: 'center'}}
                    onPress={() =>alert('Clicked')}
            >
              <Text >Đăng nhập! </Text>
            </Button>
      </View>
      </Container>
    );
  }
}