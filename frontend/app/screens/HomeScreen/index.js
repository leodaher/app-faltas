import React from "react";
import { View, Text, TouchableHighlight } from "react-native";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 4, alignItems: "center", justifyContent: "center" }}>
          <Text>App de Faltas</Text>
        </View>
        <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableHighlight style={{ flex:1, backgroundColor: 'blue'}}>
            <Text>Cadastrar</Text>
          </TouchableHighlight>
          <TouchableHighlight style={{ flex:1, backgroundColor: 'yellow'}}>
            <Text>Entrar</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
