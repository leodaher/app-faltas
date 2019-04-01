import React from "react";
import { View, Text, TextInput, TouchableHighlight, Alert } from "react-native";
import styles from './styles.js';
import colors from '../../assets/colors';
import strings from '../../assets/strings/'


export default class SignUpScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }

    this.signUp = this.signUp.bind(this);
  }

  signUp() {
    //TODO : implement sign up logic here
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.emailField}
          placeholder={strings.signUp.emailPlaceholder}
          underlineColorAndroid={colors.signUp.underlineColorAndroid}
          onChangeText={(text) => this.setState({email: text})}/>
        <TextInput
          secureTextEntry={true}
          style={styles.passwordField}
          placeholder={strings.signUp.passwordPlaceholder}
          underlineColorAndroid={colors.signUp.underlineColorAndroid}
          onChangeText={(text) => this.setState({password: text})}/>
        <View style={styles.buttonView}>
          <TouchableHighlight
            style={styles.buttonTouchable}
            onPress={this.signUp}>
            <Text style={styles.buttonText}>{strings.signUp.button}</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}
