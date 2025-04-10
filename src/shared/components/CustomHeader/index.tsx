import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import globalStyles from '../../themes/globalStyles';

interface customHeaderProps {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  headerTitle?: string;
  onLeftPress?: () => void;
  onRightPress?: () => void;
  isHome?: boolean;
  userName?: string; // optional prop for home screen greeting
}

const CustomHeader = ({
  leftIcon,
  rightIcon,
  headerTitle,
  onLeftPress,
  onRightPress,
  isHome = false,
  userName = 'User',
}: customHeaderProps) => {
  if (isHome) {
    return (
      <View style={[styles.homeHeaderContainer, globalStyles.paddingHorizontal20]}>
        <TouchableOpacity onPress={onLeftPress}>
          {leftIcon}
        </TouchableOpacity>

        <View>
          <Text style={[globalStyles.textWhite, globalStyles.caption_14_700]}>
            Hey
          </Text>
          <Text style={[globalStyles.textWhite, globalStyles.caption_20_700]}>
            {userName}
          </Text>
        </View>

        {rightIcon && (
          <TouchableOpacity onPress={onRightPress}>
            {rightIcon}
          </TouchableOpacity>
        )}
      </View>
    );
  }

  return (
    <View style={[styles.headerContainer, globalStyles.paddingHorizontal20]}>
      <TouchableOpacity onPress={onLeftPress}>
        {leftIcon || <View style={{width: 24}} />}
      </TouchableOpacity>

      <Text style={[globalStyles.textWhite, globalStyles.caption_20_700]}>
        {headerTitle || ''}
      </Text>

      <TouchableOpacity onPress={onRightPress}>
        {rightIcon || <View style={{width: 24}} />}
      </TouchableOpacity>
    </View>
  );
};

export default CustomHeader;
