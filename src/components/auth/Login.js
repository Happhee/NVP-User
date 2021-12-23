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
                {/* <View style={authStyles.insideContent}> */}
                <TextInput
                    style={authStyles.contentInput}
                    placeholder="PassWord"
                    numberOfLines={1}
                    secureTextEntry
                    onChangeText={inputPw => setPassword(inputPw)}
                />
                <View style={authStyles.contentButton}>
                    <UserButton

                        buttonName="로그인"
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


                {/* </View> */}

            </View>
            <View style={authStyles.footer}>
                <UserButton
                    buttonName="간편번호를 잊어버리셨나요?"
                    onPress={function () {
                        props.navigation.navigate('CheckCertificate')
                    }} />
            </View>
        </View >
    )
}

export default Login;