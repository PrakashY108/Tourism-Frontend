import {View, Text, TextInput, ViewStyle} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {Colors} from '../../themes/colors';
import globalStyles from '../../themes/globalStyles';
import {Svg} from '../../../assets/svg';

interface TextInputPropTypes {
  mainStyle?: ViewStyle;
  label: string;
  placeholder: string;
  keyboardType?:
    | 'default'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad';
  maxLength?: number;
  multiline?: boolean;
  errors?: any;
  errorName?: string;
  onFocus?: () => void;
  onBlur?: any;
  icon?: any;
  value:any;
  onChangeText:any;
}
const CustomTextInput = ({
  mainStyle,
  label,
  placeholder,
  keyboardType,
  maxLength,
  multiline,
  errors,
  errorName,
  onBlur,
  onFocus,
  icon,
  value,
  onChangeText
}: TextInputPropTypes) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
    if (onFocus) {
      onFocus();
    }
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (onBlur) {
      onBlur();
    }
  };

  const borderColor =
    errors && errors[errorName]
      ? Colors.red
      : isFocused
      ? Colors.primary
      : Colors.black;

  const labelColor =
    errors && errors[errorName]
      ? Colors.red
      : isFocused
      ? Colors.primary
      : Colors.black;
  return (
    <View style={[styles.view, mainStyle]}>
      <Text
        style={[
          globalStyles.caption_18_700,
          globalStyles.marginLeft10,
          globalStyles.marginVertical5,
          {color:labelColor}
        ]}>
        {label}
      </Text>
      <View style={[styles.inputView, {borderColor: borderColor}]}>
      {icon && <View style={styles.iconStyle}>{icon}</View>}

        <TextInput
          style={[styles.input]}
          placeholder={placeholder}
          keyboardType={keyboardType}
          maxLength={maxLength}
          value={value}
          onChangeText={onChangeText}
          multiline={multiline}
          onBlur={handleBlur}
          onFocus={handleFocus}
          placeholderTextColor={isFocused?Colors.primary:"grey"}
        />
      </View>
      {errors && (
        <Text style={[globalStyles.marginLeft10,globalStyles.caption_16_700, {color: labelColor}]}>
          {errors[errorName]}
        </Text>
      )}
    </View>
  );
};

export default CustomTextInput;
