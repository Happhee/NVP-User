/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  Text,
  View,
} from 'react-native';

import SplashScreen from 'react-native-splash-screen';


const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={{
      backgroundColor: isDarkMode ? Colors.black : Colors.white,
    }}>
      <Text>테스트</Text>
    </View>
  );
};
export default App;