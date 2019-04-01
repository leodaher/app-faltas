import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';
import fonts from '../../assets/fonts'

const styles = StyleSheet.create({
  container: {flex:1, backgroundColor: colors.signUp.background, alignItems: "center" },
  emailField: {height:80, fontSize:20, width: 350, fontFamily: fonts.signUp.emailField},
  passwordField: {height: 80, fontSize:20, width: 350, marginBottom: 40, fontFamily: fonts.signUp.passwordField},
  buttonView: {width: 350, flexDirection: 'row', justifyContent: 'flex-end'},
  buttonTouchable: {backgroundColor: colors.signUp.button, padding: 15},
  buttonText: {fontSize: 18, color: 'white', fontFamily: fonts.signUp.button}
});

export default styles;
