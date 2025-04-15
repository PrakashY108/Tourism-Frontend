import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import { styles } from './styles';
import CustomHeader from '../../../../shared/components/CustomHeader';
import globalStyles from '../../../../shared/themes/globalStyles';


const TermsAndConditions = () => {
  return (
    <View style={styles.container}>
      <CustomHeader headerTitle="Terms & Conditions" />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={[globalStyles.caption_16_700,{fontWeight:"900"}]}>Welcome to InfiniteJourneys!</Text>
        <Text style={styles.text}>
          By accessing and using our app, you agree to the following terms and conditions. Please read them carefully.
        </Text>

        <Text style={[globalStyles.caption_16_700,{fontWeight:"900"}]}>1. Services Provided</Text>
        <Text style={styles.text}>
          InfiniteJourneys offers ride bookings to various heritage sites and allows users to purchase tickets in advance.
        </Text>

        <Text style={[globalStyles.caption_16_700,{fontWeight:"900"}]}>2. Booking Policy</Text>
        <Text style={styles.text}>
          All bookings are subject to availability. Tickets once purchased are non-refundable unless otherwise stated.
        </Text>

        <Text style={[globalStyles.caption_16_700,{fontWeight:"900"}]}>3. Ride Conduct</Text>
        <Text style={styles.text}>
          Users are expected to behave respectfully with drivers and fellow travelers. Any misconduct may result in account suspension.
        </Text>

        <Text style={[globalStyles.caption_16_700,{fontWeight:"900"}]}>4. Account Deletion</Text>
        <Text style={styles.text}>
          You may request account deletion at any time. Your data will be permanently removed from our servers.
        </Text>

        <Text style={[globalStyles.caption_16_700,{fontWeight:"900"}]}>5. Liability</Text>
        <Text style={styles.text}>
          We are not responsible for any delays, cancellations, or issues caused by third-party providers or unforeseen circumstances.
        </Text>

        <Text style={[globalStyles.caption_16_700,{fontWeight:"900"}]}>6. Updates</Text>
        <Text style={styles.text}>
          We reserve the right to modify these terms at any time. Changes will be reflected in this section.
        </Text>

        <Text style={[styles.text, {marginTop: 20}]}>
          Thank you for choosing InfiniteJourneys. We hope you enjoy exploring heritage with ease!
        </Text>
      </ScrollView>
    </View>
  );
};

export default TermsAndConditions;

