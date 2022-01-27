import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Keyboard, Alert } from 'react-native';
import RegisterButton from '../RegisterButton';
import settingStyles from '../../assets/styles/setting';
import AsyncStorage from '@react-native-community/async-storage';
function SettingMain(props) {
    console.log(props.user)

    return (

        <View style={settingStyles.container}>
            <View style={settingStyles.header}>
                <RegisterButton buttonName="Vaccine pass registration" />
            </View>

            <View style={settingStyles.content}
                onTouchStart={() => props.navigation.navigate('ConfirmVaccinePass')} >
                <Text style={settingStyles.contentFont} >Check the vaccine pass</Text>
            </View>



            <View style={settingStyles.content}
                onTouchStart={() => props.navigation.navigate('SetPasswordUser')} >

                <Text style={settingStyles.contentFont}>Setting the Password</Text>

            </View>
            <View style={settingStyles.content}
                onTouchStart={() => props.navigation.navigate('Logout')} >

                <Text style={settingStyles.contentFont}>LOG OUT</Text>

            </View>
            <View style={settingStyles.content}
                onTouchStart={() => props.navigation.navigate('WithdrawalUser')} >

                <Text style={settingStyles.contentFont}>Membership Withdrawal</Text>

            </View>

        </View>
    )

}

export default SettingMain;