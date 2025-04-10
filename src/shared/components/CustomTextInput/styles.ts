import { StyleSheet } from 'react-native';
import { heightPixel, widthPixel } from '../../../utils/responsiveDimensions';
import { Colors } from '../../themes/colors';

export const styles = StyleSheet.create({
  view: {
    height: heightPixel(100),
    width: '100%',
    paddingHorizontal: widthPixel(10),
  },
  inputView: {
    height: heightPixel(50),
    width: '100%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.primary,
    flexDirection: 'row',
    alignItems: 'center', 
    paddingHorizontal: 10, 
  },
  input: {
    fontSize: 13,
    flex: 1, 
    paddingHorizontal: 10,
  },
  iconStyle: {
    marginRight: 10,
  },
});
