import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';
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

const CustomTabBar = ({state, descriptors, navigation}: any) => {
  const getIconName = (routeName: string, isFocused: boolean) => {
    switch (routeName) {
      case NavigationRoutes.home:
        return !isFocused ? Images.icons.home : Images.icons.home_fill;
      case NavigationRoutes.ride:
        return !isFocused ? Images.icons.rides : Images.icons.rides_fill;
      case NavigationRoutes.history:
        return !isFocused ? Images.icons.history : Images.icons.history_fill;
      case NavigationRoutes.account:
        return !isFocused ? Images.icons.account : Images.icons.account_fill;
      default:
        return 'ellipse';
    }
  };

  return (
    <View style={[styles.tabContainer]}>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;

        return (
          <TouchableOpacity
            key={route.name}
            onPress={() => navigation.navigate(route.name)}
            style={[styles.tabButton]}>
            <View style={[styles.iconWrapper, isFocused && styles.activeTab]}>
              <Image
                style={{
                  height: isFocused ? 30 : 20,
                  width: isFocused ? 30 : 20,
                  tintColor: isFocused ? '#6D4AFF' : Colors.black,
                }}
                source={getIconName(route.name, isFocused)}
              />
            </View>
            {isFocused && (
              <Text style={styles.activeText}>{route.name.toUpperCase()}</Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
const BottomNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <CustomTabBar {...props} />}>
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
    backgroundColor: Colors.background,
    borderRadius: 10,
    height: heightPixel(50),
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: Colors.white,
    shadowColor: Colors.black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    marginBottom: heightPixel(10),
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  iconWrapper: {
    padding: 10,
    borderRadius: 50,
  },
  activeTab: {},
  activeText: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 5,
  },
});
