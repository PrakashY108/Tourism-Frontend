import {StyleSheet} from 'react-native';
import {heightPixel, widthPixel} from '../../utils/responsiveDimensions';
import {Colors} from '../../shared/themes/colors';

export const styles = StyleSheet.create({
  user_img: {
    height: heightPixel(100),
    width: widthPixel(100),
  },
  icon: {
    height: heightPixel(15),
    width: widthPixel(15),
    tintColor: Colors.primary,
  },
  usercard: {
    height: heightPixel(150),
    width: '94%',
    backgroundColor: Colors.light_purple,
    borderRadius: 20,
    margin: '3%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 20,
    
  },
  card: {
    backgroundColor: Colors.white,
    height: heightPixel(60),
    width: '94%',
    marginHorizontal: '3%',
    marginVertical: '1%',
    paddingHorizontal: widthPixel(20),
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation:8
  },
  gradientContainer: {
    padding: 16,
  },
});
