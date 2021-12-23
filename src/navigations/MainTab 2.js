import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeStackScreen from './HomeStackScreen';
import SettingStackScreen from './SettingStackScreen';

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => {
    return (
        <Tab.Navigator initialRouteName="HomeStack">
            <Tab.Screen name="HomeStack" component={HomeStackScreen} />
            <Tab.Screen name="SettingStack" component={SettingStackScreen} />
        </Tab.Navigator>
    )
}

export default MainTabScreen;