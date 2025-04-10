
import {StyleSheet} from 'react-native';
import { pixelSizeHorizontal, pixelSizeVertical } from '../../../utils/responsiveDimensions';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const styles = StyleSheet.create({
  toastContainer: {
    backgroundColor: Colors.primary_color,
    borderRadius: 100,
    shadowColor: Colors.shadow,
    shadowOpacity: 1,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    shadowRadius: 1,
    alignSelf: 'center',
    position: 'absolute',
    bottom: pixelSizeVertical(70),
    elevation: 10,
  },
  toastMessage: {
    paddingVertical: pixelSizeVertical(13),
    textAlign: 'center',
    paddingHorizontal: pixelSizeHorizontal(15),
    color: Colors.white,
  },
});

export default styles;
