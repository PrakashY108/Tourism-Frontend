import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import globalStyles from '../../shared/themes/globalStyles'
import LottieView from 'lottie-react-native'
import { NavigationRoutes } from '../../shared/constants/NavigationRoutes'


const Splash = ({navigation}:any) => {
    useEffect(() => {
      setTimeout(() => {
        navigation.replace(NavigationRoutes.login)
      }, 3000);
    }, [])
    
  return (
    <View style={[globalStyles.rowCenter]}>
     <LottieView source={require("../../assets/loader/MainLoader.json")} autoPlay style={{height:300,width:300}}/>
    </View>
  )
}

export default Splash