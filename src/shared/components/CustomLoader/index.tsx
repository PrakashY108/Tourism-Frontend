import {View, Text} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import globalStyles from '../../themes/globalStyles';

const CustomLoader = () => {
  return (
    <View style={globalStyles.rowCenter}>
      <LottieView
        source={require('../../../assets/loader/YellowLoader.json')}
        autoPlay
        style={{height: 258, width: 295}}
      />
    </View>
  );
};

export default CustomLoader;
