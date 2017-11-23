import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Button, Text, Left,Right, Icon,Body, Title } from 'native-base';
import {View} from  'react-native'
import MoneyInput from "../expense/MoneyInput";
export class Debt extends Component {
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
          <Title>Nợ</Title>
          </Body>
          <Right />
        </Header>
        <View style={{ padding: 10}}>
          <Item>
            <Text> Đây là nội dung</Text>
            <MoneyInput/>
          </Item>
        </View>
      </Container>
    );
  }
}