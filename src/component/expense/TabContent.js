import React,{Component} from 'react';
import { Item, Input, Button, Text, Left,Right, Icon,Body, Title,
  CardItem, Card,Spinner} from 'native-base';

import {View} from  'react-native';
import ListExpense from "./listview";
import  styles from './style';

export default class TabContent extends Component {

  componentWillMount(){
    this.setState({ spinnerShow: false})
  }

  componentDidMount(){
  }
  render()
  {
    return (
      <View style={styles.body}>
        { this.state.spinnerShow == true?
          <Spinner />:null
        }
        <View>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Body>
              <Text>Chi tiêu: 121:000</Text>
              <Text>Còn lại: 122:000</Text>
              </Body>
            </CardItem>
          </Card>
        </View>
        <ListExpense/>
      </View>
    )
  }
}