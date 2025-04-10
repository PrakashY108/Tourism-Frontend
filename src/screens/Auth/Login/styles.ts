import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {heightPixel, widthPixel} from '../../../utils/responsiveDimensions';
import { Colors } from '../../../shared/themes/colors';

interface styleprops {
  container: ViewStyle;
  input: ViewStyle;
  button: ViewStyle;
  link: TextStyle;
}
export const styles = StyleSheet.create<styleprops>({
  container: {
    backgroundColor:Colors.background,
    width: '90%',
    alignItems: 'center',
    borderRadius: 14
  },
  input: {
    width: '90%',
  },
  button: {
    width: '70%',
    marginTop:heightPixel(20)
  },
  link:{
    color:Colors.blue
  }
});
