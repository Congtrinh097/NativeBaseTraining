import React, {Component} from 'react';
import { Container, Header, Content, Form, Item, Input, Button, Text, Left,Right, Icon,Body, Title,
  ListItem,InputGroup,Picker
} from 'native-base';


export default class  AddNewExpense extends Component{

  render(){
    return(
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("Expense")}
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
          <Title>Chi tiêu</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <ListItem last>
            <InputGroup>
              <Icon name="paper" style={{ color: '#0A69FE' }} />
              <Input placeholder="Nhập số tiền" />
            </InputGroup>
          </ListItem>
          <ListItem last>
            <InputGroup>
              <Icon name="paper" style={{ color: '#0A69FE' }} />
              <Input placeholder="Chọn loại chi tiêu" />
            </InputGroup>
          </ListItem>
          <ListItem last>
            <InputGroup>
              <Icon name="paper" style={{ color: '#0A69FE' }} />
              <Input placeholder="Ngày" value={"Hôm nay"} />
            </InputGroup>
          </ListItem>

          <Button
            info
            style={{ alignSelf: 'center', marginBottom: 20, marginTop: 20 }}
            onPress={() => { alert('Lưu thành công');
              this.props.navigation.navigate("Expense");
            }}
          >
            <Icon name="archive" />
            <Text>Lưu</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}