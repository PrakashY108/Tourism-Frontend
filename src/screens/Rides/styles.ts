import {StyleSheet} from 'react-native';
import {Colors} from '../../shared/themes/colors';
import { heightPixel, widthPixel } from '../../utils/responsiveDimensions';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    padding: 16,
    elevation: 2,
  },
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  historyTextContainer: {
    flex: 1,
    gap: 4,
  },
  placeName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  dateTime: {
    fontSize: 14,
    color: '#666',
  },
  ticketId: {
    fontSize: 14,
    color: '#444',
  },
  statusBadge: {
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  statusText: {
    fontWeight: '600',
    fontSize: 13,
  },
  icon: {
    width: widthPixel(15),
    height: heightPixel(15),
    transform: [{scaleX: -1}],
    tintColor: Colors.white,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
  },
  activeTabButton: {
    backgroundColor: Colors.primary,
  },
  tabText: {
    fontSize: 14,
    color: '#333',
  },
  activeTabText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
