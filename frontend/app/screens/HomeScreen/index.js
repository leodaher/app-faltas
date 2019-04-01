import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import strings from '../../assets/strings/';
import styles from './styles.js';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this._onPressSignUp = this._onPressSignUp.bind(this);
    this._onPressLogin = this._onPressLogin.bind(this);
  }

  _onPressSignUp() {
    this.props.navigation.navigate('SignUp');
  }

  _onPressLogin() {
    this.props.navigation.navigate('Login');
  }

  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.topContainer }>
          <Text style={ styles.title }>{ strings.home.title }</Text>
        </View>
        <View style={ styles.bottomContainer }>
          <TouchableHighlight style={ styles.signUpContainer } onPress={this._onPressSignUp}>
            <Text style={ styles.signUpText }>{ strings.home.buttons.cadastro }</Text>
          </TouchableHighlight>
          <TouchableHighlight style={ styles.loginContainer } onPress={this._onPressLogin}>
            <Text style={styles.loginText}>{ strings.home.buttons.entrar }</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
