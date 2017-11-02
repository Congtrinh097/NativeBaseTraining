import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Button, Text, Left,Right, Icon,Body, Title } from 'native-base';
import {View} from  'react-native'
export class Statistic extends Component {
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
          <Title>Thống kê</Title>
          </Body>
          <Right />
        </Header>
        <View style={{ padding: 10}}>
          <Item>
            <Text> Đây là nội dung</Text>
          </Item>
        </View>
      </Container>
    );
  }
}