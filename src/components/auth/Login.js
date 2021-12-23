import React, { useState } from 'react';
import deviceInfoModule from 'react-native-device-info';
import { View, Text, TextInput } from 'react-native';
import { Button } from 'react-native-paper'
import UserButton from '../UserButton';
import colors from '../../assets/colors/color';
function Login(props) {
    let [passWord, setPassword] = useState('');
    const uniqueId = deviceInfoModule.getUniqueId();
    console.log(props)

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: colors.nvpRoot, fontFamily: 'DoHyeon-Regular', fontSize: 40, textDecorationLine: 'underline' }} >sasd</Text>

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
        </View >
    )
}

export default Login;