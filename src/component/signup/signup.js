import * as React from 'react';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Button,
  Text,
  Spinner,
  Left,
  Header,
  Body,
  Right,
  Title
} from 'native-base';
import {View, Image, StyleSheet, TouchableOpacity, Alert, Dimensions} from 'react-native';
import FirebaseServiceInstance from "../../Services/FirebaseService";


export class SignUp extends React.Component {

  componentWillMount() {
    this.setState({
      Email: '',
      Password: '',
      ConfirmPassword: ''
    });
  }

  render() {
    return (
      <Content scrollEnabled={false} style={{backgroundColor: '#252c40', paddingTop: 0}}>

        <View style={{flex: 1, height: window.height - 30,}}>
          <Header style={{justifyContent: 'center', alignItems: 'center'}}>
            <Title>Đăng kí</Title>
          </Header>

          <View style={styles.logoContainer}>
            {/*<Image source={AppImage.IVLogo} style={styles.logo}/>*/}
          </View>
          <View style={styles.formContainer}>

            <Form>
              <Item style={{marginBottom: 10, marginRight: 20}}>
                <Input style={{color: '#fff'}} placeholderTextColor={'#cedbff'} placeholder={'Email'}
                       value={this.state.Email}
                       onChangeText={(text: string) => this.emailChanged(text)}
                       returnKeyType={'done'}/>
              </Item>
              <Item style={{marginBottom: 10, marginRight: 20}}>
                <Input style={{color: '#fff'}} placeholderTextColor={'#cedbff'} placeholder={'Mật khẩu'}
                       secureTextEntry
                       value={this.state.Password}
                       onChangeText={(text: string) => this.passwordChanged(text)}
                       returnKeyType={'done'}/>
                {/*{pErr && <Text numberOfLines={2} style={styles.errorText}>Password {this.state.Password.Error}</Text>}*/}
              </Item>
              <Item style={{marginBottom: 10, marginRight: 20}}>
                <Input style={{color: '#fff'}} placeholderTextColor={'#cedbff'} placeholder={'Xác nhận mật khẩu'}
                       secureTextEntry
                       value={this.state.ConfirmPassword}
                       onChangeText={(text: string) => this.confirmPasswordChanged(text)}
                       returnKeyType={'done'}/>
                {/*{cpErr && <Text numberOfLines={2} style={styles.errorText}>Confirm*/}
                {/*password {this.state.ConfirmPassword.Error}</Text>}*/}
              </Item>
            </Form>
          </View>
          <View style={styles.buttonContainer}>
            <Button rounded block style={styles.buttonWithoutLogin}
                    onPress={() => this.onRegister()}
            >
              <Text uppercase> Đăng kí</Text>
            </Button>
          </View>
          <View style={styles.LinkContainer}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'white', fontSize: 12}}>Bạn đã có tài khoản? </Text>
              <TouchableOpacity onPress={() => {
                  this.props.navigation.navigate('Login');
              }}>
                <Text bold style={{color: 'white', fontSize: 12}}>Đăng nhập!</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Content>
    );
  }

  async onRegister() {
    let result = await FirebaseServiceInstance.SignUpWithEmailAndPassword(this.state.Email, this.state.Password);
    if (result.code) {
      Alert(result.message);
      return
    } else {
      Alert.alert(
        'Success',
        'Register successfully\nContinue login with ' + this.state.Email + '?',
        [
          {
            text: 'No, back to Login', onPress: () => {
            this.props.navigation.navigate('Login')
          }
          },
          {
            text: 'Yes', onPress: async () => {
            let result = await FirebaseServiceInstance.SignInWithEmailAndPassword(this.state.Email, this.state.Password);
            if (result.code) {
              alert(' Sign in Error')
              return;
            } else {
              let currentUser = FirebaseServiceInstance.GetCurrentUser();
              this.props.navigation.navigate('Expense')
            }
          }
          },
        ],
        {cancelable: false}
      );
    }
  }

  emailChanged(text: string) {
    this.setState({
      Email: text
    })
  }

  passwordChanged(text: string) {

    this.setState({
      Password: text
    })
  }

  confirmPasswordChanged(text: string) {
    this.setState({
      ConfirmPassword: text
    })
  }

}

const window = Dimensions.get('window');
export const styles = StyleSheet.create({
  background: {
    flex: 1,
    // remove width and height to override fixed static size
    width: null,
    height: null,
    justifyContent: 'center'
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: window.width / 10,
  },
  logoContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  formContainer: {
    flex: 4
  },
  LinkContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  buttonWithoutLogin: {
    margin: 15,
    marginHorizontal: 0,
    backgroundColor: '#d82727'
  },
  logo: {
    height: 105,
    width: 100,
    resizeMode: 'contain',
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  errorText: {
    color: '#d82727',
    fontSize: 10,
    maxWidth: window.width / 3,
    textAlign: 'right'
  }
});