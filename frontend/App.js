import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./app/screens/HomeScreen";
import SignUpScreen from "./app/screens/SignUpScreen";
import LoginScreen from "./app/screens/LoginScreen";
import colors from "./app/assets/colors/";

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  },
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: {
      headerStyle: { backgroundColor: colors.signUp.headerBackground }
    }
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      headerStyle: { backgroundColor: colors.login.headerBackground }
    }
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
