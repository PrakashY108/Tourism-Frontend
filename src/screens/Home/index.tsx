import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import AuthContainer from '../../shared/components/AuthContainer';
import CustomHeader from '../../shared/components/CustomHeader';
import {Dummy, Images} from '../../assets/images';
import {styles} from './styles';
import {Colors} from '../../shared/themes/colors';
import FeaturedCard from './components/FeaturedCard';
import SuggestedCard from './components/SuggestedCard';
import MakeTrip from './components/MakeTrip';

const Home = () => {
  const activeRide = {
    destination: 'Adalaj Stepwell',
    driver: 'Ravi Sharma',
    time: 'ETA: 10 mins',
  };

  const featuredPlaces = [
    {id: '1', name: 'Sabarmati Ashram', image: Images.loginBackground},
    {id: '2', name: 'Kankaria Lake', image: Images.loginBackground},
    {id: '3', name: 'Sidi Saiyyed Mosque', image: Images.loginBackground},
  ];

  const suggestedTrips = [
    {
      id: '1',
      name: 'Heritage Day Tour',
      desc: 'Explore the heart of old Ahmedabad',
    },
    {id: '2', name: 'Cultural Walk', desc: 'Visit key museums & temples'},
  ];

  const quickActions = [
    {title: 'Book Ride', icon: Images.icons.rides},
    {title: 'My History', icon: Images.icons.history},
    {title: 'Explore', icon: Images.icons.account},
  ];

  return (
    <AuthContainer mainContainerStyle={{flex: 1}}>
      <CustomHeader
        isHome
        headerTitle="Infinty"
        leftIcon={<Image style={styles.icon} source={Dummy.userDummy} />}
      />
      <ScrollView contentContainerStyle={{paddingBottom: 100}}>
       
          <MakeTrip />
      
        {/* Featured */}
        <Text style={styles.sectionTitle}>Featured Places</Text>
        <FlatList
          data={featuredPlaces}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({item}) => <FeaturedCard item={item} />}
          contentContainerStyle={{paddingHorizontal: 16}}
        />

        {/* 
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.quickActionsRow}>
          {quickActions.map(action => (
            <TouchableOpacity key={action.title} style={styles.quickButton}>
              <Image source={action.icon} style={styles.quickIcon} />
              <Text style={styles.quickLabel}>{action.title}</Text>
            </TouchableOpacity>
          ))}
        </View> */}

        {/* Suggested Trips */}
        <Text style={styles.sectionTitle}>Suggested Trips</Text>
        <FlatList
          data={suggestedTrips}
          keyExtractor={item => item.id}
          renderItem={({item}) => <SuggestedCard item={item} />}
          contentContainerStyle={{paddingHorizontal: 16}}
        />
      </ScrollView>
      {/* Active Ride */}
      <TouchableOpacity activeOpacity={1} style={styles.activeRideCard}>
        <View>
          <Text style={styles.rideTitle}>
            Active Ride to {activeRide.destination}
          </Text>
          <Text style={styles.rideSubText}>
            Driver: {activeRide.driver} | {activeRide.time}
          </Text>
        </View>
        <Image source={Images.icons.right_arrow} style={styles.arrowIcon} />
      </TouchableOpacity>
    </AuthContainer>
  );
};

export default Home;
