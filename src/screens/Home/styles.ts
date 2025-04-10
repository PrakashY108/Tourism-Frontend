import {StyleSheet} from 'react-native';
import {Colors} from '../../shared/themes/colors';
import {heightPixel, widthPixel} from '../../utils/responsiveDimensions';

export const styles = StyleSheet.create({
  icon: {
    width: widthPixel(60),
    height: heightPixel(60),
  },
  activeRideCard: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#dee0fa',
    borderRadius: 12,
    padding: widthPixel(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    marginBottom: heightPixel(15),
    width: '92%',
    alignSelf: 'center',
  },
  rideTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.black,
  },
  rideSubText: {
    fontSize: 14,
    color: Colors.gray,
    marginTop: 4,
  },
  arrowIcon: {
    width: 20,
    height: 20,
    tintColor: Colors.gray,
  },
  mainContent: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 16,
    color: Colors.black,
    alignContent: 'flex-start',
  },

  quickActionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  quickButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  quickIcon: {
    width: 40,
    height: 40,
    marginBottom: 6,
  },
  quickLabel: {
    fontSize: 12,
    fontWeight: '500',
  },
});
