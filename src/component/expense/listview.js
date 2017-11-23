import React, {Component} from 'react';
import {Container, Header, Content, List, ListItem, Left, Body, Right, Icon, Text} from 'native-base';

const datalist = [
  {
    Category: "Ăn sáng",
    Price: "10.000",
    Date: "Hôm qua"
  },
  {
    Category: "Ăn sáng",
    Price: "10.000",
    Date: "Hôm qua"
  },
  {
    Category: "Đổ xăng",
    Price: "50.000",
    Date: "Hôm nay"
  },
  {
    Category: "Cafe ",
    Price: "20.000",
    Date: "Hôm nay"
  },
  {
    Category: "Ăn trưa",
    Price: "15.000",
    Date: "Hôm nay"
  }
]
export default class ListAvatarExample extends Component {

componentWillMount() {
  this.setState({data: datalist});
}

  componentDidMount() {
    this.setState({data: datalist});
  }

  render() {
    return (
      <Container>
        <Content>
          <List>
            {this.state.data && this.state.data.map((item, index) => {
              return (
                <ListItem avatar last key={index}>
                  <Left>
                    <Icon name="paper" style={{color: '#0f10ff', marginLeft: 10}}/>
                  </Left>
                  <Body>
                  <Text>{item.Category}</Text>
                  <Text note>{item.Price}</Text>
                  </Body>
                  <Right>
                    <Text note>{item.Date}</Text>
                  </Right>
                </ListItem>
              )
            })
            }

          </List>
        </Content>
      </Container>
    );
  }
}