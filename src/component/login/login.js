import React, { Component } from 'react';

import { Container, Header, Content, Form, Item, Input, Button, Text, Left, Right, Icon, Title } from 'native-base';
import { StyleSheet ,View, Image, TouchableOpacity} from 'react-native';
import FirebaseServiceInstance from '../../Services/FirebaseService';
import  LocalStorageInstance from  '../../Services/LocalStorageServices';

const drawerCover = require("../../../img/login_background.jpg");

export class Login extends Component {

  componentWillMount(){
    this.setState({Email: '', Password: ''});
  }

  async onLogin() {

    let result = await FirebaseServiceInstance.SignInWithEmailAndPassword(this.state.Email, this.state.Password);

    alert(result)
    if(result.code) {
      switch (result.code) {
        case 'auth/user-not-found':
          alert("User Not Found");
          break;
        case 'auth/wrong-password':
          alert("Wrong Password")
          break;
      }
    } else {
      alert("Success Login!");
      let currentUser = FirebaseServiceInstance.GetCurrentUser();
      LocalStorageInstance.saveCurrentUser(currentUser);
      this.props.navigation.navigate("Expense")
    }
  }

  emailChanged(text) {
    this.setState({
      Email: text
    })
  }

  passwordChanged(text) {
    this.setState({
      Password: text
    })
  }

  componentDidMount(){
    let currentUser = LocalStorageInstance.getCurrentUser();
    if (currentUser){
      this.props.navigation.navigate("Expense");
    }
  }
  render() {
    return (
      <Container>
      <Header style={{justifyContent: 'center', alignItems: 'center'}}>
          <Title>Đăng nhập</Title>
      </Header>
        <View style={styles.background}>
          <View style={{padding: 10}}>
            <Item style={styles.button}>
              <Input placeholder="Email" style={{color: '#fff'}}
                     placeholderTextColor={'#cedbff'}
                     value={this.state.UserName}
                     onChangeText={(text) => {this.emailChanged(text)}}
              />
            </Item>
            <Item last style={styles.button}>
              <Input placeholder="Mật khẩu" style={{color: '#fff'}}
                     placeholderTextColor={'#cedbff'}
                     value={this.state.Password}
                     secureTextEntry
                     onChangeText={(text) => {this.passwordChanged(text)}}
              />
            </Item>

            <Button rounded block style={styles.button} onPress={()=>{this.onLogin()}}>
              <Left>
                <Icon active name="person" style={{color: "#fafcfe", marginLeft: 20}}/>
              </Left>
              <Text>Đăng nhập</Text>
              <Right/>
            </Button>

            <Button info rounded block style={styles.button} onPress={() => this.props.navigation.navigate("Tools")}>
              <Left>
                <Icon name="logo-facebook" style={{color: "#46639E", marginLeft: 20}}/>
              </Left>
              <Text>Đăng nhập bằng facebook</Text>
              <Right/>
            </Button>

            <Button danger rounded block style={styles.button} onPress={() => this.props.navigation.navigate("Login")}>
              <Left>
                <Icon name="logo-google" style={{color: "#f5e615", marginLeft: 20}}/>
              </Left>
              <Text>Đăng nhập bằng google</Text>
              <Right/>
            </Button>
            <View style={{flexDirection: 'row', height: 50, justifyContent:'center', alignItems:'center',bottom: 0, marginTop: 30}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'white', fontSize: 12}}>Bạn chưa có tài khoản? </Text>
                <TouchableOpacity onPress={() => {
                  this.props.navigation.navigate("SignUp")
                }}>
                  <Text bold style={{color: 'white', fontSize: 12}}>Đăng kí!</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Container>
    );
  }


}

var styles = StyleSheet.create({
  background: {
    flex: 1,
    // remove width and height to override fixed static size
    width: null,
    height: null,
    backgroundColor: "#252c40"
  },
  button:{
    margin: 15, marginTop: 20
  }
});