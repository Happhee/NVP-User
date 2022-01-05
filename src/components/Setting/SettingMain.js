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
                <RegisterButton buttonName="백신패스 등록" />
            </View>

            <View style={settingStyles.content}
                onTouchStart={() => props.navigation.navigate('ConfirmVaccinePass')} >
                <Text style={settingStyles.contentFont} >백신패스 확인</Text>
            </View>



            <View style={settingStyles.content}
                onTouchStart={() => props.navigation.navigate('ConfirmVaccinePass')} >

                <Text style={settingStyles.contentFont}>비밀번호 설정</Text>

            </View>
            <View style={settingStyles.content}
                onTouchStart={() => props.navigation.navigate('Logout')} >

                <Text style={settingStyles.contentFont}>로그아웃</Text>

            </View>
            <View style={settingStyles.content}
                onTouchStart={() => props.navigation.navigate('WithdrawalUser')} >

                <Text style={settingStyles.contentFont}>회원탈퇴</Text>

            </View>

        </View>
    )

}

export default SettingMain;