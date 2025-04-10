import {View, Text, StyleSheet, ImageBackground, Pressable} from 'react-native';
import React, {useEffect} from 'react';
import AuthContainer from '../../../shared/components/AuthContainer';
import CustomHeader from '../../../shared/components/CustomHeader';
import globalStyles from '../../../shared/themes/globalStyles';
import {SafeAreaView} from 'react-native-safe-area-context';

import {heightPixel} from '../../../utils/responsiveDimensions';
import TitleText from '../../../shared/components/TitleText';
import CustomTextInput from '../../../shared/components/CustomTextInput';
import {styles} from './styles';
import {Strings} from '../../../localization/i18n';
import CustomButton from '../../../shared/components/CustomButton';
import {Images} from '../../../assets/images';
import {Colors} from '../../../shared/themes/colors';
import {NavigationRoutes} from '../../../shared/constants/NavigationRoutes';
import AppLogo from '../../../shared/components/AppLogo';
import {Formik} from 'formik';
import {RegisterSchema} from '../../../utils/schemas';

const Register = ({navigation}: any) => {
  const initialValues = {
    username: '',
    password: '',
    email: '',
  };
  const handleSubmit = () => {
    navigation.replace(NavigationRoutes.main);
  };
  return (
    <AuthContainer mainContainerStyle={globalStyles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={RegisterSchema}
        onSubmit={handleSubmit}>
        {({
          handleBlur,
          handleChange,
          errors,
          values,
          handleSubmit,
          touched,
        }) => (
          <>
            <ImageBackground
              source={Images.loginBackground}
              style={[globalStyles.rowCenter, globalStyles.container]}>
              <View
                style={[
                  styles.container,
                  globalStyles.paddingHorizontal10,
                  globalStyles.paddingVertical40,
                ]}>
                <AppLogo />

                <CustomTextInput
                  mainStyle={styles.input}
                  placeholder={Strings.username}
                  label={Strings.username}
                  value={values.username}
                  onChangeText={handleChange('username')}
                  errorName="username"
                  errors={touched.username && errors}
                />
                <CustomTextInput
                  mainStyle={styles.input}
                  placeholder={Strings.enter_email}
                  label={Strings.email}
                  value={values.email}
                  onChangeText={handleChange('email')}
                  errorName="email"
                  errors={touched.email && errors}
                />
                <CustomTextInput
                  mainStyle={styles.input}
                  placeholder={Strings.enter_password}
                  label={Strings.password}
                  value={values.password}
                  onChangeText={handleChange('password')}
                  errorName="password"
                  errors={touched.password && errors}
                />

                <CustomButton
                  onPress={handleSubmit}
                  buttonText={Strings.register}
                  mainButtonstyle={styles.button}
                />
                <Pressable
                  onPress={() => navigation.goBack()}
                  style={globalStyles.fdRow}>
                  <TitleText
                    textStyle={globalStyles.caption_14_700}
                    viewStyle={globalStyles.marginVertical20}
                    titleText={Strings.already_user}
                  />
                  <Text style={styles.link}>{Strings.login}</Text>
                </Pressable>
              </View>
            </ImageBackground>
          </>
        )}
      </Formik>
    </AuthContainer>
  );
};

export default Register;
