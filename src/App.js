import React, { useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import store from './store/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthStackScreen from './navigations/AuthStackScreen';
import MainTabScreen from './navigations/MainTab';
import { FLOWPREDICATE_TYPES } from '@babel/types';

const Stack = createNativeStackNavigator();

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen name="Auth" component={AuthStackScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Main" component={MainTabScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default App;