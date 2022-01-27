import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingMain from '../screens/SettingStack/SettingMain';
import ConfrimVaccinePassScreen from '../screens/SettingStack/ConfirmVaccinePass';
import LogoutScreen from '../screens/SettingStack/Logout';
import WithdrawalUserScreen from '../screens/SettingStack/WithdrawalUser';
import SetPasswordUserScreen from '../screens/SettingStack/SetPasswordUser';

const Stack = createNativeStackNavigator();
const SettingStack = createNativeStackNavigator();

const SettingStackScreen = (props) => {
    console.log('환경설정');

    console.log(props);
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#DDECCA',
                },
                headerTitleStyle: {
                    fontFamily: 'DoHyeon-Regular',
                    fontSize: 28,
                },
                headerBackTitleStyle: {
                    fontSize: 17,
                    fontFamily: 'DoHyeon-Regular',
                },
                headerTintColor: '#41624A',

            }}
        >
            <SettingStack.Screen name="SettingMain" component={SettingMain}

                options={{
                    title: 'Setting',
                }} />
            <SettingStack.Screen name="ConfirmVaccinePass" component={ConfrimVaccinePassScreen}
                options={{
                    title: 'Check the vaccine pass',
                }} />
            <SettingStack.Screen name="Logout" component={LogoutScreen}
                options={{
                    title: 'LOG OUT',
                }} />
            <SettingStack.Screen name="WithdrawalUser" component={WithdrawalUserScreen}
                options={{
                    title: 'Membership Withdrawal',
                }} />

            <SettingStack.Screen name="SetPasswordUser" component={SetPasswordUserScreen}
                options={{
                    title: 'Setting the Password',
                }} />
        </Stack.Navigator>
    )
}

export default SettingStackScreen;