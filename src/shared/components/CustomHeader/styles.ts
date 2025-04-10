import {StyleSheet} from 'react-native';
import {heightPixel, widthPixel} from '../../../utils/responsiveDimensions';
import {Colors} from '../../themes/colors';

export const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    height: heightPixel(70),
    paddingHorizontal:widthPixel(15),
    borderBottomLeftRadius: widthPixel(60),
    borderBottomRightRadius: widthPixel(60),
  },
  homeHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    height: heightPixel(100),
    paddingHorizontal: widthPixel(20),
    gap: heightPixel(25),
    borderBottomLeftRadius: widthPixel(60),
    borderBottomRightRadius: widthPixel(60),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  
});
