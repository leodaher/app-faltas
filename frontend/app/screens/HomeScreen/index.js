import React from "react";
import { View, Text, TouchableHighlight } from "react-native";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 7, alignItems: "center", justifyContent: "center" }}>
          <Text>App de Faltas</Text>
        </View>
        <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableHighlight style={{ flex:1, backgroundColor: '#11122E', justifyContent: "center", alignItems: "center"}}>
            <Text style={{ color: 'white', fontSize: 20, fontFamily: "monospace"}}>Cadastrar</Text>
          </TouchableHighlight>
          <TouchableHighlight style={{ flex:1, backgroundColor: '#F5F8F5', justifyContent: "center", alignItems: "center"}}>
            <Text style={{ fontSize: 20}}>Entrar</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
