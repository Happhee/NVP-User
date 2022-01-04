import React, { useEffect, useState } from 'react';
import deviceInfoModule from 'react-native-device-info';
import { View, Text, TextInput, Keyboard } from 'react-native';
import { Button } from 'react-native-paper'
import UserButton from '../UserButton';
import colors from '../../assets/colors/color';
import authStyles from '../../assets/styles/authStyles';
import { TouchableWithoutFeedback } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

function Login(props) {
    let [passWord, setPassword] = useState('');
    const uniqueId = deviceInfoModule.getUniqueId();
    console.log('로그인화면');
    // console.log(prop);

    const onPressLogin = async (dataToSubmit) => {
        await props.onPressLogin(dataToSubmit);
    }
    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
            console.log('dismissed keyboard'); //console 확인용
        }}>
            <View style={authStyles.container}>
                <View style={authStyles.header}>
                    <Text style={authStyles.headerFont}>NVP</Text>
                </View>
                <View style={authStyles.title}>
                    <Text style={authStyles.titleFont}>등록한 간편 비밀번호를</Text>
                    <Text style={authStyles.titleFont}>입력해주세요</Text>
                </View>

                <View style={authStyles.content} >

                    <TextInput
                        keyboardType="number-pad"
                        maxLength={6}

                        style={authStyles.contentInput}
                        placeholder="PassWord"
                        placeholderTextColor={colors.nvpRoot}
                        numberOfLines={1}
                        secureTextEntry
                        onChangeText={(inputPw) => {
                            setPassword(inputPw);

                            if (inputPw.length == 6) {
                                Keyboard.dismiss();
                            }

                        }}
                    />


                    <View style={authStyles.contentButton}>
                        <UserButton
                            buttonName="로그인"
                            onPress={function () {
                                const dataToSubmit = {
                                    id: uniqueId,
                                    password: passWord
                                }
                                // console.log(dataToSubmit);
                                props.onPressLogin(dataToSubmit)
                                setPassword('');
                                // props.navigation.navigate('Main')
                                Keyboard.dismiss();
                            }} />

                        <UserButton
                            buttonName="회원가입"
                            onPress={function () {
                                props.navigation.navigate('TakeTextMessage')
                            }} />
                    </View>


                </View>

                <View style={authStyles.footer}>
                    <UserButton
                        buttonName="간편번호를 잊어버리셨나요?"
                        onPress={function () {
                            props.navigation.navigate('ResetTextMessage');
                        }} />
                </View>

            </View >
        </TouchableWithoutFeedback>

    )
}

export default Login;