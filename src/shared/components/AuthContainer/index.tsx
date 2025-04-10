import { View, Text, SafeAreaView, ViewStyle } from 'react-native';
import React from 'react';
import globalStyles from '../../themes/globalStyles';

interface AuthContainerProps {
  mainContainerStyle?: ViewStyle;  
  isView?: boolean;
  children: React.ReactNode;
}

const AuthContainer: React.FC<AuthContainerProps> = ({
  mainContainerStyle,
  isView = false,
  children,
}) => {
  return isView ? (
    <View style={[globalStyles.container, mainContainerStyle]}>
      {children}
    </View>
  ) : (
    <SafeAreaView style={[ mainContainerStyle]}>
      {children}
    </SafeAreaView>
  );
};

export default AuthContainer;

