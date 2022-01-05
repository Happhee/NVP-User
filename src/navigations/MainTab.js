import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeStackScreen from './HomeStackScreen';
import SettingStackScreen from './SettingStackScreen';
import tabBarStyles from '../assets/styles/tabBar';
import Icon from 'react-native-vector-icons/Ionicons'

const Tab = createMaterialBottomTabNavigator();



const MainTabScreen = (props) => {
    return (
        <Tab.Navigator initialRouteName="HomeStack"
            barStyle={tabBarStyles.bottomTab}>
            <Tab.Screen name="HomeStack" component={HomeStackScreen}
                options={{
                    tabBarLabel: '나의 증명서',
                    tabBarIcon: ({ focused }) => (
                        <Icon name={focused ? "file-tray-full" : 'file-tray-full-outline'}
                            size={20} color={focused ? '#41624A' : '#9E9E9E'} />
                    )
                }} />
            <Tab.Screen name="SettingStack" children={() => <SettingStackScreen appNavigation={props.appNavigation} />}
                options={{
                    tabBarLabel: '설정',
                    tabBarIcon: ({ focused }) => (
                        <Icon name={focused ? "ios-settings-sharp" : 'ios-settings-outline'}
                            size={20} color={focused ? '#41624A' : '#9E9E9E'} />
                    )
                }} />
        </Tab.Navigator>
    )
}

export default MainTabScreen;