import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterNVPScreen from '../screens/SettingStack/RegisterNVP';

const Stack = createNativeStackNavigator();
const SettingStack = createNativeStackNavigator();

const SettingStackScreen = () => {
    return (
        <Stack.Navigator>
            <SettingStack.Screen name="RegisterNVP" component={RegisterNVPScreen} />
        </Stack.Navigator>
    )
}

export default SettingStackScreen;