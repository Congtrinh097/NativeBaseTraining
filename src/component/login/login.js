import React, { Component } from 'react';

import { Container, Header, Content, Form, Item, Input, Button, Text, Left,Right, Icon,Body, Title } from 'native-base';
import { StyleSheet ,View, Image} from 'react-native'

const drawerCover = require("../../../img/login_background.jpg");
export class Login extends Component {
  render() {
    return (
      <Container>
      <Header>
        <Left></Left>
        <Body>
          <Title>Đăng nhập</Title>
        </Body>
        <Right/>
      </Header>
        <Image source={drawerCover} style={styles.background}>
          <View style={{padding: 10}}>
            <Item style={styles.button}>
              <Input placeholder="Tên đăng nhập"/>
            </Item>
            <Item last style={styles.button}>
              <Input placeholder="Mật khẩu"/>
            </Item>

            <Button block style={styles.button} onPress={() => this.props.navigation.navigate("Tools")}>
              <Left>
                <Icon active name="person" style={{color: "#fafcfe", marginLeft: 10}}/>
              </Left>
              <Text>Đăng nhập</Text>
              <Right/>
            </Button>

            <Button info block style={styles.button} onPress={() => this.props.navigation.navigate("Tools")}>
              <Left>
                <Icon name="logo-facebook" style={{color: "#46639E", marginLeft: 10}}/>
              </Left>
              <Text>Đăng nhập bằng facebook</Text>
              <Right/>
            </Button>

            <Button danger block style={styles.button} onPress={() => this.props.navigation.navigate("Login")}>
              <Left>
                <Icon name="logo-google" style={{color: "#f5e615", marginLeft: 10}}/>
              </Left>
              <Text>Đăng nhập bằng google</Text>
              <Right/>
            </Button>
          </View>
        </Image>
      </Container>
    );
  }
}

var styles = StyleSheet.create({
  background: {
    flex: 1,
    // remove width and height to override fixed static size
    width: null,
    height: null,
  },
  button:{
    margin: 15, marginTop: 20
  }
});