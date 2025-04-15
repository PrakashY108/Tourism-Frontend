import {View, Text, Image, FlatList} from 'react-native';
import React from 'react';
import AuthContainer from '../../shared/components/AuthContainer';
import CustomHeader from '../../shared/components/CustomHeader';
import RNBounceable from '@freakycoder/react-native-bounceable';
import {styles} from './styles';
import {Images} from '../../assets/images';

const historyData = [
  {
    id: '1',
    placeName: 'Adalaj Stepwell',
    date: 'March 12, 2025',
    ticketId: '#AHM4523',
    status: 'Completed',
  },
  {
    id: '2',
    placeName: 'Sabarmati Ashram',
    date: 'March 15, 2025',
    ticketId: '#AHM4789',
    status: 'Completed',
  },
  {
    id: '3',
    placeName: 'Sidi Saiyyed Mosque',
    date: 'March 18, 2025',
    ticketId: '#AHM4890',
    status: 'Pending',
  },
  {
    id: '4',
    placeName: 'Kankariya Lake',
    date: 'March 18, 2025',
    ticketId: '#AHM4890',
    status: 'Canceled',
  },
];

const History = () => {
  const renderItem = ({item}) => (
    <RNBounceable style={styles.card}>
      <View style={styles.historyItem}>
        <View style={styles.historyTextContainer}>
          <Text style={styles.placeName}>{item.placeName}</Text>
          <Text style={styles.dateTime}>Visited on: {item.date}</Text>
          <Text style={styles.ticketId}>Ticket ID: {item.ticketId}</Text>
        </View>
        <View
          style={[
            styles.statusBadge,
            {
              backgroundColor:
                item.status === 'Completed' ? '#D4EDDA' : '#FFE5B4',
            },
          ]}>
          <Text
            style={[
              styles.statusText,
              {
                color: item.status === 'Completed' ? '#155724' : '#8A6D3B',
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
        
        headerTitle="History"
      />
      <FlatList
        data={historyData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{paddingBottom: 20}}
      />
    </AuthContainer>
  );
};

export default History;
