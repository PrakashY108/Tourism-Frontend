import { View, Text, Image, FlatList } from 'react-native';
import React from 'react';
import AuthContainer from '../../shared/components/AuthContainer';
import CustomHeader from '../../shared/components/CustomHeader';
import RNBounceable from '@freakycoder/react-native-bounceable';
import { styles } from './styles'; // Create or update as needed
import { Images } from '../../assets/images';

const rideData = [
  {
    id: '1',
    driverName: 'Ravi Mehta',
    vehicle: 'Sedan - GJ01AB1234',
    pickup: 'Sabarmati Ashram',
    drop: 'Adalaj Stepwell',
    date: 'March 20, 2025',
    time: '10:00 AM',
    status: 'Completed',
  },
  {
    id: '2',
    driverName: 'Anjali Patel',
    vehicle: 'Auto - GJ05CD5678',
    pickup: 'Sidi Saiyyed Mosque',
    drop: 'Kankariya Lake',
    date: 'March 21, 2025',
    time: '02:30 PM',
    status: 'Upcoming',
  },
  {
    id: '3',
    driverName: 'Sameer Shah',
    vehicle: 'SUV - GJ07EF4321',
    pickup: 'Manek Chowk',
    drop: 'Sabarmati Riverfront',
    date: 'March 22, 2025',
    time: '05:00 PM',
    status: 'Canceled',
  },
];

const Rides = () => {
  const renderItem = ({ item }) => (
    <RNBounceable style={styles.card}>
      <View style={styles.historyItem}>
        <View style={styles.historyTextContainer}>
          <Text style={styles.placeName}>Driver: {item.driverName}</Text>
          <Text style={styles.dateTime}>Vehicle: {item.vehicle}</Text>
          <Text style={styles.ticketId}>Pickup: {item.pickup}</Text>
          <Text style={styles.ticketId}>Drop: {item.drop}</Text>
          <Text style={styles.dateTime}>
            {item.date} at {item.time}
          </Text>
        </View>
        <View
          style={[
            styles.statusBadge,
            {
              backgroundColor:
                item.status === 'Completed'
                  ? '#D4EDDA'
                  : item.status === 'Upcoming'
                  ? '#D1ECF1'
                  : '#F8D7DA',
            },
          ]}>
          <Text
            style={[
              styles.statusText,
              {
                color:
                  item.status === 'Completed'
                    ? '#155724'
                    : item.status === 'Upcoming'
                    ? '#0C5460'
                    : '#721C24',
              },
            ]}>
            {item.status}
          </Text>
        </View>
      </View>
    </RNBounceable>
  );

  return (
    <AuthContainer>
      <CustomHeader
        leftIcon={
          <Image source={Images.icons.right_arrow} style={styles.icon} />
        }
        headerTitle="My Rides"
      />
      <FlatList
        data={rideData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </AuthContainer>
  );
};

export default Rides;
