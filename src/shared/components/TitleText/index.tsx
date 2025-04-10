import React from 'react';
import {Text, TextStyle, View, ViewStyle} from 'react-native';
import styles from './styles';
import globalStyles from '../../themes/globalStyles';

interface TitleTextProp {
  titleText: string;
  textStyle?: TextStyle;
  viewStyle?: ViewStyle[];
}

const TitleText = ({ titleText, textStyle, viewStyle}: TitleTextProp) => {
  return (
    <View style={[viewStyle]}>
      <Text
        style={[
          globalStyles.caption_28_700,
          
          styles.text1,

          textStyle,
        ]}>
        {titleText}
      </Text>
    </View>
  );
};

export default TitleText;
