import React from "react";
import { View, Text, TextInput, TouchableHighlight, Alert } from "react-native";
import styles from './styles.js';
import colors from '../../assets/colors';
import strings from '../../assets/strings/'


export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }

    this.login = this.login.bind(this);
  }

  login() {
    //TODO : implement login logic here
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.emailField}
          placeholder={strings.login.emailPlaceholder}
          underlineColorAndroid={colors.login.underlineColorAndroid}
          onChangeText={(text) => this.setState({email: text})}/>
        <TextInput
          secureTextEntry={true}
          style={styles.passwordField}
          placeholder={strings.login.passwordPlaceholder}
          underlineColorAndroid={colors.login.underlineColorAndroid}
          onChangeText={(text) => this.setState({password: text})}/>
        <View style={styles.buttonView}>
          <TouchableHighlight
            style={styles.buttonTouchable}
            onPress={this.login}>
            <Text style={styles.buttonText}>{strings.login.button}</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}
