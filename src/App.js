import React, { useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { Provider } from 'react-redux';
import store from './store/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './SplashScreen';
import AuthStackScreen from './navigations/AuthStackScreen';
import MainTabScreen from './navigations/MainTab';
import { FLOWPREDICATE_TYPES } from '@babel/types';

import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>


        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
          <Stack.Screen name="Main" children={({ navigation }) => <MainTabScreen appNavigation={navigation} />} />
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Auth" component={AuthStackScreen}
            options={{ headerShown: false }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;