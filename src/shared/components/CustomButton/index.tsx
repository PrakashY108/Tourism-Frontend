import { View, Text, ViewStyle, TextStyle } from 'react-native';
import React from 'react';
import RNBounceable from '@freakycoder/react-native-bounceable';
import globalStyles from '../../themes/globalStyles';
import { styles } from './styles';

interface Buttontypes {
  mainButtonstyle?: ViewStyle;
  buttonTextStyle?: TextStyle;
  buttonText: string;
  buttonType?: 'FilledButton' | 'BorderButton';
  disabled?: boolean;
  onPress: () => void;
}
const CustomButton = ({
  mainButtonstyle,
  buttonTextStyle,
  buttonText,
  buttonType = 'FilledButton',
  onPress,
  disabled,
}: Buttontypes) => {
  let buttonStyle, textStyle;

  switch (buttonType) {
    case 'FilledButton':
      buttonStyle = globalStyles.shadowButton;
      textStyle = globalStyles.textButton;
      break;
    case 'BorderButton':
      buttonStyle = globalStyles.borderButton;
      textStyle = globalStyles.textBlack;
      break;
  }

  return (
    <RNBounceable
      disabled={disabled}
      onPress={onPress}
      style={[
        buttonStyle,
        globalStyles.paddingHorizontal20,
        styles.buttton,
        mainButtonstyle,
      ]}>
      <Text style={[textStyle, buttonTextStyle, globalStyles.caption_24_900]}>
        {buttonText}
      </Text>
    </RNBounceable>
  );
};

export default CustomButton;
