import React, { Component } from 'react';
import  {StyleSheet} from 'react-native'
import { Container, Header, Content, Form, Item, Input, Button, Text, Left,Right, Icon,Body, Title } from 'native-base';
import {View} from  'react-native'
import styles from './style'

export class About extends Component {
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
          <Title>Thông tin</Title>
          </Body>
          <Right />
        </Header>
        <View style={styles.container}>
          <Text style={styles.text}> Phần mềm quản lí cá nhân</Text>
          <Text style={styles.text}> Sử dụng để quản lí các công việc hằng ngày của bạn, quản lí tài chính cá nhân, và một số tiện ích</Text>
          <Text style={styles.text}> Phiên bản: v1.0.0</Text>
          <Text style={styles.text}> Phát triển bởi: congtrinh097</Text>


        </View>
      </Container>
    );
  }
}