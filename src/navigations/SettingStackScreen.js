import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingMain from '../screens/SettingStack/SettingMain';
import ConfrimVaccinePassScreen from '../screens/SettingStack/ConfirmVaccinePass';
import LogoutScreen from '../screens/SettingStack/Logout';
import WithdrawalUserScreen from '../screens/SettingStack/WithdrawalUser';

const Stack = createNativeStackNavigator();
const SettingStack = createNativeStackNavigator();

const SettingStackScreen = () => {
    return (
        <Stack.Navigator>
            <SettingStack.Screen name="SettingMain" component={SettingMain} />
            <SettingStack.Screen name="ConfirmVaccinePass" component={ConfrimVaccinePassScreen} />
            <SettingStack.Screen name="Logout" component={LogoutScreen} />
            <SettingStack.Screen name="WithdrawalUser" component={WithdrawalUserScreen} />
        </Stack.Navigator>
    )
}

export default SettingStackScreen;