import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Button, View, Left,Right, Icon,Body, Title,
  CardItem, Card, Tabs, Tab, ScrollableTab} from 'native-base';
import TabContent from "./TabContent";
import  styles from './style';

export class Expense extends Component {
  render() {
    return (
      <Container>

        <Header hasTabs>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
          <Title>Số dư: 250.000</Title>
          </Body>
          <Right />
        </Header>

        <Tabs renderTabBar={() => <ScrollableTab />}>
          <Tab heading="Tháng 10">
              <TabContent/>
          </Tab>
          <Tab heading="Tháng trước">
            <TabContent/>
          </Tab>
          <Tab  acive heading="Tháng này">
            <TabContent/>
          </Tab>
          <Tab heading="Tháng Sau">
            <TabContent/>
          </Tab>
          <Tab heading="Năm này">
            <TabContent/>
          </Tab>
        </Tabs>

        <View style={{backgroundColor:'white'}}>
          <Button
            block style={styles.button}
            onPress={() => this.props.navigation.navigate("AddNewExpense")}
          >
            <Icon name="paper"/>
          </Button>
        </View>

      </Container>
    );
  }
}