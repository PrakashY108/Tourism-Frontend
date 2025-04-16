import React from 'react';
import {View, Text, FlatList, StyleSheet, Image} from 'react-native';
import globalStyles from '../../../../shared/themes/globalStyles';
import AuthContainer from '../../../../shared/components/AuthContainer';
import CustomHeader from '../../../../shared/components/CustomHeader';
import { Images } from '../../../../assets/images';
import { styles } from './styles';
import { Colors } from '../../../../shared/themes/colors';


const Rewards = () => {
  const totalEarnings = '₹ 170';

  const historyData = [
    {id: '1', title: 'Promotional ', date: 'April 3, 2025', amount: '+ ₹ 50'},
    {id: '2', title: 'Cash Back', date: 'March 28, 2025', amount: '+ ₹ 100'},
    {id: '3', title: 'Referral Bonus', date: 'March 15, 2025', amount: '+ ₹ 20'},
  ];

  const renderHistoryItem = ({item}: any) => (
    <View style={styles.historyCard}>
      <View style={styles.historyContent}>
        <View style={{flex: 1}}>
          <Text style={[globalStyles.caption_18_700, {color: Colors.black}]}>
            {item.title}
          </Text>
          <Text style={styles.dateText}>{item.date}</Text>
        </View>
        <Text style={styles.amountText}>{item.amount}</Text>
      </View>
    </View>
  );
  

  return (
    <AuthContainer mainContainerStyle={styles.container}>
      <CustomHeader headerTitle="My Rewards" />
      
      {/* Dashboard Card */}
      <View style={styles.card}>
        <Image source={Images.icons.rewards} style={styles.icon} />
        <View style={{marginLeft: 10}}>
          <Text style={[globalStyles.caption_16_700,{color:Colors.white}]}>Total Earnings</Text>
          <Text style={[globalStyles.caption_20_700,{color:Colors.white}]}>{totalEarnings}</Text>
        </View>
      </View>

      {/* History */}
      <Text style={[globalStyles.caption_20_900, styles.historyTitle]}>Reward History</Text>
      <FlatList
        data={historyData}
        keyExtractor={item => item.id}
        renderItem={renderHistoryItem}
        contentContainerStyle={{paddingBottom: 30}}
      />
    </AuthContainer>
  );
};

export default Rewards;
