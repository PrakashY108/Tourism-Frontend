import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {PaperProvider} from 'react-native-paper';
import Navigation from './src/navigation';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Toast from './src/shared/components/CustomToast';
import {Provider} from 'react-redux';
import {store} from './src/store/authSlice/configureStore';
import {enableScreens} from 'react-native-screens';
import {SafeAreaView} from 'react-native-safe-area-context';
import globalStyles from './src/shared/themes/globalStyles';
import 'react-native-get-random-values';
const App = () => {
  enableScreens();
  return (
    <SafeAreaView style={globalStyles.container}>
      <Provider store={store}>
        <PaperProvider>
          <StatusBar
            barStyle={'dark-content'}
            translucent
            backgroundColor={Colors.transparent}
          />
          <Navigation />
          <Toast />
        </PaperProvider>
      </Provider>
    </SafeAreaView>
  );
};

export default App;
