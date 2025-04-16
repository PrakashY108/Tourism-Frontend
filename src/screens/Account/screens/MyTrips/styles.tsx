import {StyleSheet} from 'react-native';
import {Colors} from '../../../../shared/themes/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 16,
  },
  title: {
    marginBottom: 16,
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    elevation: 4,
    shadowColor: Colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 16,
  },
  dateText: {
    fontSize: 14,
    color: Colors.grey,
    marginVertical: 4,
  },
  detailRow: {
    flexDirection: 'row',
    marginVertical: 4,
  },
  detailLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.black,
    width: 80,
  },
  detailValue: {
    fontSize: 14,
    color: Colors.darkGrey,
  },
  status: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 8,
  },
});
