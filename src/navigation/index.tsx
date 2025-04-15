import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Keyboard,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationRoutes} from '../shared/constants/NavigationRoutes';
import Login from '../screens/Auth/Login';
import Register from '../screens/Auth/Register';
import ForgotPassword from '../screens/Auth/ForgotPassword';
import VerifyOtp from '../screens/Auth/VerifyOtp';
import Splash from '../screens/Splash/Splash';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Rides from '../screens/Rides';
import History from '../screens/History';
import Accounts from '../screens/Account';
import {Images} from '../assets/images';
import {Colors} from '../shared/themes/colors';
import {heightPixel} from '../utils/responsiveDimensions';
import globalStyles from '../shared/themes/globalStyles';
import MyTrips from '../screens/Account/screens/MyTrips';
import Rewards from '../screens/Account/screens/Rewards';
import TermsAndConditions from '../screens/Account/screens/TermsAndConditions';
import Profile from '../screens/Account/screens/Profile';

const CustomTabBar = ({state, descriptors, navigation}: any) => {
  const getIconName = (routeName: string, isFocused: boolean) => {
    switch (routeName) {
      case NavigationRoutes.home:
        return isFocused ? Images.icons.home_fill : Images.icons.home;
      case NavigationRoutes.ride:
        return isFocused ? Images.icons.rides_fill : Images.icons.rides;
      case NavigationRoutes.history:
        return isFocused ? Images.icons.history_fill : Images.icons.history;
      case NavigationRoutes.account:
        return isFocused ? Images.icons.account_fill : Images.icons.account;
      default:
        return 'ellipse';
    }
  };

  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          if (!isFocused) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            onPress={onPress}
            style={[styles.tabButton, isFocused && styles.activeTabButton]}>
            <Image
              source={getIconName(route.name, isFocused)}
              style={[
                styles.icon,
                {
                  tintColor: isFocused ? Colors.primary : Colors.grey,
                  height: isFocused ? heightPixel(26) : heightPixel(22),
                  width: isFocused ? heightPixel(26) : heightPixel(22),
                },
              ]}
            />
            {isFocused && (
              <Text style={styles.label}>{route.name.toUpperCase()}</Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const BottomNavigation = () => {
  const Tab = createBottomTabNavigator();
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  useEffect(() => {
    const showSub = Keyboard.addListener('keyboardDidShow', () =>
      setKeyboardVisible(true),
    );
    const hideSub = Keyboard.addListener('keyboardDidHide', () =>
      setKeyboardVisible(false),
    );
    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props =>
        isKeyboardVisible ? null : <CustomTabBar {...props} />
      }>
      <Tab.Screen name={NavigationRoutes.home} component={Home} />
      <Tab.Screen name={NavigationRoutes.ride} component={Rides} />
      <Tab.Screen name={NavigationRoutes.history} component={History} />
      <Tab.Screen name={NavigationRoutes.account} component={Accounts} />
    </Tab.Navigator>
  );
};
const Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={NavigationRoutes.splash}>
        <Stack.Screen name={NavigationRoutes.splash} component={Splash} />
        <Stack.Screen name={NavigationRoutes.login} component={Login} />
        <Stack.Screen name={NavigationRoutes.register} component={Register} />
        <Stack.Screen name={NavigationRoutes.myTrips} component={MyTrips} />
        <Stack.Screen name={NavigationRoutes.rewards} component={Rewards} />
        <Stack.Screen name={NavigationRoutes.profile} component={Profile} />
        <Stack.Screen
          name={NavigationRoutes.TermsAndCondition}
          component={TermsAndConditions}
        />
        <Stack.Screen
          name={NavigationRoutes.forgotPassword}
          component={ForgotPassword}
        />
        <Stack.Screen name={NavigationRoutes.verifyOtp} component={VerifyOtp} />
        <Stack.Screen
          name={NavigationRoutes.main}
          component={BottomNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    paddingBottom: Platform.OS === 'ios' ? 25 : 12,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -4},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 10,
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingVertical: 6,
    borderRadius: 20,
  },
  activeTabButton: {
    backgroundColor: '#F5F5F5',
  },
  icon: {
    resizeMode: 'contain',
    marginBottom: 2,
  },
  label: {
    fontSize: 10,
    color: Colors.primary,
    fontWeight: '600',
    marginTop: 2,
  },
});
