import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Button, Text, Left,Right, Icon,Body, Title } from 'native-base';
import {View} from  'react-native'
export class Home extends Component {
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
          <Body style={{  flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
          <Title style={{  flex: 4}} >Trang chủ</Title>
          <Icon active name="settings" style={{ flex: 1, color: "#f5e615" }} />
          </Body>

          <Right/>
        </Header>
        <View style={{ padding: 10}}>
          <Item>
            <Text> Đây là nội dung trang chủ</Text>
          </Item>
        </View>
      </Container>
    );
  }
}