import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Button, Text, Left,Right, Icon,Body, Title,Separator,
  ListItem,Switch, Radio,Picker,Badge
} from 'native-base';


export class Tools extends Component {
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
          <Title style={{  flex: 4}} >Tiện ích</Title>
          <Icon active name="settings" style={{ flex: 1, color: "#f5e615" }} />
          </Body>

          <Right/>
        </Header>
        <Content>
          <Separator bordered noTopBorder />
          <ListItem icon last onPress={() => this.props.navigation.navigate('Calculator')}>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="calculator" />
              </Button>
            </Left>
            <Body>
            <Text>Máy Tính</Text>
            </Body>
            <Right>

            </Right>
          </ListItem>
          <Separator bordered />
          <ListItem icon last>
            <Left>
              <Button style={{ backgroundColor: "#4CDA64" }}>
                <Icon active name="pulse" />
              </Button>
            </Left>
            <Body>
            <Text>Lãi xuất đầu tư</Text>
            </Body>
            <Right>
            </Right>
          </ListItem>
          <Separator bordered />
          <ListItem icon last >
            <Left>
              <Button style={{ backgroundColor: "#5855D6" }}>
                <Icon active name="speedometer" />
              </Button>
            </Left>
            <Body>
            <Text>Đồng hồ bấm giờ</Text>
            </Body>
            <Right>
            </Right>
          </ListItem>

        </Content>
      </Container>
    );
  }
}