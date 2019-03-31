import { StyleSheet } from 'react-native'
import colors from '../../assets/colors/';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.home.background
  },
  topContainer: {
    flex: 7,
    justifyContent: "center",
    alignItems: "center"
  },
  bottomContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  signUpContainer: {
    flex:1,
    backgroundColor: colors.home.signUpContainer,
    justifyContent: "center",
    alignItems: "center"
  },
  loginContainer: {
    flex:1,
    backgroundColor: colors.home.loginContainer,
    justifyContent: "center",
    alignItems: "center"
  },
  signUpText: {
    color: colors.home.signUpText,
    fontSize: 20,
    fontFamily: "Montserrat-Regular"
  },
  loginText: {
    fontSize: 20,
    fontFamily: "Montserrat-Regular"
  },
  title: {
    fontSize: 28,
    color: colors.home.title,
    fontFamily: "Montserrat-Regular"
  }
});

export default styles
