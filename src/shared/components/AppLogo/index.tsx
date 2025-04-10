import { View, Text, Image } from 'react-native'
import React from 'react'
import { Images } from '../../../assets/images'
import { styles } from './styles'
import TitleText from '../TitleText'
import globalStyles from '../../themes/globalStyles'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { Strings } from '../../../localization/i18n'

const AppLogo = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={Images.loginBackground}/>
      <TitleText viewStyle={globalStyles.marginVertical10} textStyle={{color:Colors.primary}} titleText={Strings.app_name} />
    </View>
  )
}

export default AppLogo