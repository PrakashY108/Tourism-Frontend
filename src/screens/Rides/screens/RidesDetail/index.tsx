// RideDetails.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import globalStyles from '../../../../shared/themes/globalStyles';
import { Colors } from '../../../../shared/themes/colors';
import { styles } from './styles';

const RideDetails = ({ route }: any) => {
  const { ride } = route.params; // Retrieve the ride object passed via navigation

  // Example of additional data for payment summary and times
  const totalTime = '2 hours 30 minutes'; // Total time to complete the ride
  const stop1Time = '15 minutes'; // Time spent at the first stop
  const waitingTime = '10 minutes'; // Waiting time during the ride

  const paymentSummary = {
    totalPrice: '₹350',
    breakdown: {
      baseFare: '₹200',
      waitingCharge: '₹50',
      distanceCharge: '₹100',
    },
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={globalStyles.caption_20_700}>Ride Details</Text>

      {/* Ride Info */}
      <View style={styles.detailsContainer}>
        <Text style={styles.detailText}>Driver: <Text style={styles.detailValue}>{ride.driverName}</Text></Text>
        <Text style={styles.detailText}>Vehicle: <Text style={styles.detailValue}>{ride.vehicle}</Text></Text>
        <Text style={styles.detailText}>Pickup: <Text style={styles.detailValue}>{ride.pickup}</Text></Text>
        <Text style={styles.detailText}>Drop: <Text style={styles.detailValue}>{ride.drop}</Text></Text>
        <Text style={styles.detailText}>Date: <Text style={styles.detailValue}>{ride.date}</Text></Text>
        <Text style={styles.detailText}>Time: <Text style={styles.detailValue}>{ride.time}</Text></Text>
      </View>

      {/* Payment Summary */}
      <View style={styles.paymentSummary}>
        <Text style={globalStyles.caption_18_700}>Payment Summary</Text>
        <Text style={styles.paymentText}>Total Price: <Text style={styles.paymentValue}>{paymentSummary.totalPrice}</Text></Text>
        <View style={styles.paymentBreakdown}>
          <Text style={styles.paymentBreakdownText}>Base Fare: {paymentSummary.breakdown.baseFare}</Text>
          <Text style={styles.paymentBreakdownText}>Waiting Charge: {paymentSummary.breakdown.waitingCharge}</Text>
          <Text style={styles.paymentBreakdownText}>Distance Charge: {paymentSummary.breakdown.distanceCharge}</Text>
        </View>
      </View>

      {/* Time Details */}
      <View style={styles.timeDetailsContainer}>
        <Text style={globalStyles.caption_18_700}>Time Summary</Text>
        <Text style={styles.timeDetailText}>Total Time to Complete: <Text style={styles.timeDetailValue}>{totalTime}</Text></Text>
        <Text style={styles.timeDetailText}>Stop 1 Time: <Text style={styles.timeDetailValue}>{stop1Time}</Text></Text>
        <Text style={styles.timeDetailText}>Waiting Time: <Text style={styles.timeDetailValue}>{waitingTime}</Text></Text>
      </View>

      {/* Ride Status */}
      <Text style={[styles.statusText, { color: ride.status === 'Completed' ? '#155724' : ride.status === 'Upcoming' ? '#0C5460' : '#721C24' }]}>
        Status: <Text style={styles.statusValue}>{ride.status}</Text>
      </Text>
    </ScrollView>
  );
};

export default RideDetails;
