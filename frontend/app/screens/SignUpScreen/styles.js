import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';

const styles = StyleSheet.create({
  container: {flex:1, backgroundColor: colors.signUp.background, alignItems: "center" },
  emailField: {height:80, fontSize:20, width: 350, fontFamily: 'Montserrat-Regular'},
  passwordField: {height: 80, fontSize:20, width: 350, marginBottom: 40, fontFamily: 'Montserrat-Regular'},
  buttonView: {width: 350, flexDirection: 'row', justifyContent: 'flex-end'},
  buttonTouchable: {backgroundColor: colors.signUp.button, padding: 15},
  buttonText: {fontSize: 18, color: 'white', fontFamily: 'Montserrat-Regular'}
});

export default styles;
