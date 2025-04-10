import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {heightPixel, widthPixel} from '../../utils/responsiveDimensions';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    height: heightPixel(100),
    width: '96%',
    marginHorizontal: '2%',
    marginVertical: '1%',
    paddingHorizontal: widthPixel(20),
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 8,
  },
  icon: {
    height: heightPixel(16),
    width: widthPixel(16),
    transform: [{scaleX: -1}],
    tintColor: Colors.white,
  },
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  historyTextContainer: {
    flex: 1,
  },
  placeName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primaryText,
  },
  dateTime: {
    fontSize: 14,
    color: Colors.secondaryText,
    marginTop: 4,
  },
  ticketId: {
    fontSize: 12,
    color: Colors.grey,
    marginTop: 2,
  },
  statusBadge: {
    backgroundColor: '#D4EDDA',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  statusText: {
    color: '#155724',
    fontWeight: 'bold',
    fontSize: 12,
  },
});
