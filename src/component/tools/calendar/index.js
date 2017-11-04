import React, { Component } from 'react';
import {Container, Header, Left, Right, Icon, Body, Title, Text, Button} from 'native-base';

export  class Calendar extends Component{

  render(){
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
          <Title>Âm lịch</Title>
          </Body>
          <Right />
        </Header>
        <Text> Đây là Calendar</Text>
      </Container>
    )
  }
}