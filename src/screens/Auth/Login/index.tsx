import {View, Text, StyleSheet, ImageBackground, Pressable} from 'react-native';
import React, {useEffect} from 'react';
import AuthContainer from '../../../shared/components/AuthContainer';
import globalStyles from '../../../shared/themes/globalStyles';
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
import {LoginSchema} from '../../../utils/schemas';

const Login = ({navigation}: any) => {
  const initialValues = {
    email: '',
    password: '',
  };
  const handleSubmit = values => {
    
    navigation.replace(NavigationRoutes.main)
  };
  return (
    <AuthContainer mainContainerStyle={globalStyles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}>
        {({
          values,
          handleChange,
          touched,
          errors,
          handleSubmit,
         
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
                  ,{gap:10}
                ]}>
                <AppLogo />
                <TitleText
                  viewStyle={globalStyles.marginVertical20}
                  textStyle={{color: Colors.primary}}
                  titleText={Strings.welcome_back}
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
                  errors={touched.email && errors}
                />
                <CustomButton
                  onPress={handleSubmit}
                  buttonText={Strings.login}
                  mainButtonstyle={styles.button}
                />
                <Pressable
                  onPress={() => navigation.navigate(NavigationRoutes.register)}
                  style={globalStyles.fdRow}>
                  <TitleText
                    textStyle={globalStyles.caption_14_700}
                    viewStyle={globalStyles.marginVertical20}
                    titleText={Strings.dont_have_account}
                  />
                  <Text style={styles.link}>{Strings.signUp}</Text>
                </Pressable>
              </View>
            </ImageBackground>
          </>
        )}
      </Formik>
    </AuthContainer>
  );
};

export default Login;
