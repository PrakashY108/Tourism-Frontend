import {View, Text, TextStyle} from 'react-native';
import React from 'react';
import globalStyles from '../../themes/globalStyles';

interface ErrorTextProps{
    errors:any;
    errorName:string,
    textStyle?:TextStyle;
}
const ErrorText = ({errorName, errors, textStyle}:ErrorTextProps) => {
  return (
    <>
      {errors[errorName] && (
        <Text style={[globalStyles.errorText, textStyle]}>
          {errors[errorName]}
        </Text>
      )}
    </>
  );
};

export default ErrorText;
