import React, { useState } from 'react';
import deviceInfoModule from 'react-native-device-info';
import { View, Text, TextInput } from 'react-native';
import { Button } from 'react-native-paper'
import UserButton from '../UserButton';
import colors from '../../assets/colors/color';
import authStyles from '../../assets/styles/authStyles';

function Login(props) {
    let [passWord, setPassword] = useState('');
    const uniqueId = deviceInfoModule.getUniqueId();
    console.log(props)

    return (
        <View style={authStyles.container}>
            <View style={authStyles.header}>
                <Text style={authStyles.headerFont}>NVP</Text>
            </View>
            <View style={authStyles.title}>
                <Text style={authStyles.titleFont}>등록한 간편 비밀번호를</Text>
                <Text style={authStyles.titleFont}>입력해주세요</Text>

            </View>
            <View style={authStyles.content}>
                <TextInput placeholder="PW"
                    onChangeText={inputPw => setPassword(inputPw)}
                />
                <UserButton
                    buttonName="LOGIN"
                    onPress={function () {
                        const dataToSubmit = {
                            uniqueId: uniqueId,
                            passWord: passWord
                        }
                        props.onPressLogin(dataToSubmit);
                        setPassword('');
                        props.navigation.navigate('Main')
                    }} />

                <UserButton
                    buttonName="회원가입"
                    onPress={function () {
                        props.navigation.navigate('CheckCertificate')
                    }} />
            </View>
            <View style={authStyles.footer}>

            </View>
        </View >
    )
}

export default Login;