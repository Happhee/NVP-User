import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeStackScreen from './HomeStackScreen';
import SettingStackScreen from './SettingStackScreen';

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => {
    return (
        <Tab.Navigator initialRouteName="HomeStack">
            <Tab.Screen name="나의 증명서" component={HomeStackScreen} />
            <Tab.Screen name="설정" component={SettingStackScreen} />
        </Tab.Navigator>
    )
}

export default MainTabScreen;