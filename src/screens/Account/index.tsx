import React from 'react';
import {View, Text, Image, FlatList, Alert} from 'react-native';
import AuthContainer from '../../shared/components/AuthContainer';
import CustomHeader from '../../shared/components/CustomHeader';
import {Dummy, Images} from '../../assets/images';
import {styles} from './styles';
import globalStyles from '../../shared/themes/globalStyles';
import RNBounceable from '@freakycoder/react-native-bounceable';
import {Colors} from '../../shared/themes/colors';
import {NavigationRoutes} from '../../shared/constants/NavigationRoutes';

const Accounts = ({navigation}: any) => {
  const data = [
    {
      title: 'Profile',
      icon: Images.icons.account,
      navigation: NavigationRoutes.profile,
    },
    {
      title: 'My Trips',
      icon: Images.icons.rides,
      navigation: NavigationRoutes.myTrips,
    },
    {
      title: 'Rewards',
      icon: Images.icons.rewards,
      navigation: NavigationRoutes.rewards,
    },
    {
      title: 'Terms & Conditions',
      icon: Images.icons.agreement,
      navigation: NavigationRoutes.TermsAndCondition,
    },
    {title: 'Log Out', icon: Images.icons.logout, navigation: null},
    {title: 'Delete Account', icon: Images.icons.delete, navigation: null},
  ];

  const handleMenuPress = (item: any) => {
    if (item.navigation) {
      navigation.navigate(item.navigation);
    } else if (item.title === 'Log Out') {
      // Show logout confirmation
      Alert.alert('Log Out', 'Are you sure you want to log out?', [
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'Log Out',
          onPress: () => {
            // logoutUser();
          },
        },
      ]);
    } else if (item.title === 'Delete Account') {
      // Show delete confirmation
      Alert.alert('Delete Account', 'This action is irreversible. Continue?', [
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            // deleteAccount();
          },
        },
      ]);
    }
  };

  const renderItem = ({item}: any) => (
    <RNBounceable style={styles.card} onPress={()=>handleMenuPress(item)}>
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
