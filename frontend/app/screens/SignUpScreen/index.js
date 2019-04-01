import React from "react";
import { View, Text, TextInput, TouchableHighlight, Dimensions } from "react-native";
import styles from './styles.js'
import colors from '../../assets/colors';

export default class SignUpScreen extends React.Component {
  render() {
    const rightMarginButton = (Dimensions.get('screen').width - 350)/2;

    return (
      <View style={{flex:1, backgroundColor: colors.signUp.background, alignItems: "center" }}>
        <TextInput style={{height:80, fontSize:20, width: 350}} placeholder="E-mail" underlineColorAndroid={colors.signUp.underlineColorAndroid}/>
        <TextInput secureTextEntry={true} style={{height: 80, fontSize:20, width: 350, marginBottom: 40}} placeholder="Senha" underlineColorAndroid={colors.signUp.underlineColorAndroid}/>
        <View style={{width: 350, flexDirection: 'row', justifyContent: 'flex-end'}}>
          <TouchableHighlight style={{backgroundColor: colors.signUp.button, padding: 15}}>
            <Text style={{fontSize: 18, color: 'white'}}>Cadastrar</Text>
            </TouchableHighlight>
        </View>
      </View>
    )
  }
}
