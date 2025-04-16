// styles.js
import { StyleSheet } from 'react-native';
import { Colors } from '../../../../shared/themes/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 20,
  },
  detailsContainer: {
    marginTop: 20,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 12,
    color: Colors.black,
    fontWeight: '500',
  },
  detailValue: {
    fontWeight: 'normal',
    color: Colors.color_707070,
  },
  paymentSummary: {
    marginTop: 30,
    padding: 10,
    backgroundColor: 'f0f0f0',
    borderRadius: 8,
    marginBottom: 20,
  },
  paymentText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.black,
    marginBottom: 12,
  },
  paymentValue: {
    fontSize: 18,
    fontWeight: 'normal',
    color: Colors.primary,
  },
  paymentBreakdown: {
    marginTop: 10,
  },
  paymentBreakdownText: {
    fontSize: 14,
    color: Colors.color_707070,
    marginBottom: 4,
  },
  timeDetailsContainer: {
    marginTop: 20,
  },
  timeDetailText: {
    fontSize: 16,
    marginBottom: 8,
    color: Colors.black,
  },
  timeDetailValue: {
    fontWeight: 'normal',
    color: Colors.color_707070,
  },
  statusText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  statusValue: {
    fontWeight: 'normal',
    fontSize: 18,
  },
});
