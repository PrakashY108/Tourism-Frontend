import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import AuthContainer from '../../shared/components/AuthContainer';
import CustomHeader from '../../shared/components/CustomHeader';
import {Dummy, Images} from '../../assets/images';
import {styles} from './styles';
import globalStyles from '../../shared/themes/globalStyles';
import RNBounceable from '@freakycoder/react-native-bounceable';
import {Colors} from '../../shared/themes/colors';

const Accounts = () => {
  const data = [
    {title: 'Account', icon: Images.icons.account},
    {title: 'My Trips', icon: Images.icons.rides},
    {title: 'Vehicle Bookings', icon: Images.icons.rides},
    {title: 'Rewards', icon: Images.icons.rewards},
    {title: 'Terms & Conditions', icon: Images.icons.agreement},
    {title: 'Log Out', icon: Images.icons.logout},
    {title: 'Delete Account', icon: Images.icons.delete},
  ];

  const renderItem = ({item}: any) => (
    <RNBounceable style={styles.card}>
      <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
        <Image source={item.icon} style={styles.icon} />
        <Text style={[globalStyles.caption_18_700, {marginLeft: 16}]}>
          {item.title}
        </Text>
      </View>
      <Image source={Images.icons.right_arrow} style={styles.icon} />
    </RNBounceable>
  );

  return (
    <AuthContainer
      mainContainerStyle={{backgroundColor: Colors.white, flex: 1}}>
     

      <View style={styles.usercard}>
        <Image source={Dummy.userDummy} style={styles.user_img} />
        <View style={{marginLeft: 12}}>
          <Text style={globalStyles.caption_18_700}>Username</Text>
          <Text style={globalStyles.caption_14_400}>email@example.com</Text>
        </View>
      </View>

      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={{paddingBottom: 20}}
      />
    </AuthContainer>
  );
};

export default Accounts;
