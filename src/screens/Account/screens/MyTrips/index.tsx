import React from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import {Dummy} from '../../../../assets/images';
import globalStyles from '../../../../shared/themes/globalStyles';
import {Colors} from '../../../../shared/themes/colors';
import {styles} from './styles';
import RNBounceable from '@freakycoder/react-native-bounceable';

const MyTrips = () => {
  const trips = [
    {
      id: '1',
      title: 'Sabarmati Ashram Visit',
      date: '10 Apr 2025',
      status: 'Completed',
      image: Dummy.userDummy,
      distance: '12.4 km',
      time: '30 mins',
      price: '₹150',
    },
    {
      id: '2',
      title: 'Adalaj Stepwell Tour',
      date: '5 Apr 2025',
      status: 'Upcoming',
      image: Dummy.userDummy,
      distance: '18.7 km',
      time: '45 mins',
      price: '₹220',
    },
  ];

  const renderTripItem = ({item}: any) => (
    <RNBounceable style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={globalStyles.caption_16_500}>{item.title}</Text>
        <Text style={styles.dateText}>{item.date}</Text>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Distance:</Text>
          <Text style={styles.detailValue}>{item.distance}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Time:</Text>
          <Text style={styles.detailValue}>{item.time}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Price:</Text>
          <Text style={styles.detailValue}>{item.price}</Text>
        </View>

        <Text
          style={[
            styles.status,
            {
              color: item.status === 'Completed' ? Colors.success : Colors.primary,
              marginTop: 8,
            },
          ]}>
          {item.status}
        </Text>
      </View>
    </RNBounceable>
  );

  return (
    <View style={styles.container}>
      <Text style={[globalStyles.caption_20_700, styles.title]}>My Trips</Text>
      <FlatList
        data={trips}
        keyExtractor={item => item.id}
        renderItem={renderTripItem}
        contentContainerStyle={{paddingBottom: 20}}
      />
    </View>
  );
};

export default MyTrips;

