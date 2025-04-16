import {StyleSheet} from 'react-native';
import {Colors} from '../../../../shared/themes/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  card: {
    backgroundColor: Colors.primary,
    borderRadius: 16,
    margin: 20,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  icon: {
    width: 40,
    height: 40,
    tintColor: Colors.white,
  },
  historyTitle: {
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10,
    color: Colors.black,
  },
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 12,
    padding: 16,
    backgroundColor: Colors.grey,
    borderRadius: 12,
  },
  historyCard: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 20,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  
  historyContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  
  dateText: {
    fontSize: 13,
    color: Colors.black,
    marginTop: 4,
  },
  
  amountText: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.green,
  },
  
});
