import {StyleSheet} from 'react-native';
import {heightPixel, widthPixel} from '../../../utils/responsiveDimensions';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    height: heightPixel(100),
    width: widthPixel(100),
    borderRadius: 15,
  },
});
