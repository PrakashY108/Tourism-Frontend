/* eslint-disable react-hooks/exhaustive-deps */

import React, {useEffect, useRef} from 'react';
import {Animated, Keyboard, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {showToastMessage} from '../../../store/authSlice/authSlice';
import globalStyles from '../../themes/globalStyles';
import styles from './styles';

const Toast = () => {
  const fadeAnimation = useRef(new Animated.Value(0)).current;
  const dispatch = useDispatch();

  const toastMessage = useSelector(
    (state: any) => state?.authSlice?.toastMessage,
  );

  const fadeIn = () => {
    Keyboard.dismiss();
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 150,
      useNativeDriver: true,
    }).start(({finished}) => {
      if (!finished) {
        return;
      }
      fadeOut();
    });
  };

  //after start animation it automatically remove after given timeout
  const fadeOut = () => {
    setTimeout(() => {
      Animated.timing(fadeAnimation, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true,
      }).start(() => dispatch(showToastMessage('')));
      //!change toast visible time
    }, 2500);
  };
  useEffect(() => {
    toastMessage && fadeIn();
  }, [toastMessage]);

  return (
    toastMessage && (
      <Animated.View style={[styles.toastContainer, {opacity: fadeAnimation}]}>
        <Text style={[globalStyles.caption_16_500, styles.toastMessage]}>
          {toastMessage}
        </Text>
      </Animated.View>
    )
  );
};

export default Toast;
