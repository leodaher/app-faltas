import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import strings from '../../assets/strings/';
import styles from './styles.js';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.topContainer }>
          <Text style={ styles.title }>{ strings.home.title }</Text>
        </View>
        <View style={ styles.bottomContainer }>
          <TouchableHighlight style={ styles.signUpContainer }>
            <Text style={ styles.signUpText }>{ strings.home.buttons.cadastro }</Text>
          </TouchableHighlight>
          <TouchableHighlight style={ styles.loginContainer }>
            <Text style={styles.loginText}>{ strings.home.buttons.entrar }</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
