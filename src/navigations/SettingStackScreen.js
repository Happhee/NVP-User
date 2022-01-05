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
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#DDECCA',
                },
                headerBackTitleStyle: {
                    fontSize: 17,
                    fontFamily: 'DoHyeon-Regular',
                },
                headerTintColor: '#41624A'
            }}
        >
            <SettingStack.Screen name="SettingMain" component={SettingMain}
                options={{
                    title: '설정',
                }} />
            <SettingStack.Screen name="ConfirmVaccinePass" component={ConfrimVaccinePassScreen}
                options={{
                    title: '백신패스 확인',
                }} />
            <SettingStack.Screen name="Logout" component={LogoutScreen}
                options={{
                    title: '로그아웃',
                }} />
            <SettingStack.Screen name="WithdrawalUser" component={WithdrawalUserScreen}
                options={{
                    title: '회원탈퇴',
                }} />
        </Stack.Navigator>
    )
}

export default SettingStackScreen;