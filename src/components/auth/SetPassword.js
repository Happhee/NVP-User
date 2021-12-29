import React, { useEffect, useState } from 'react';
import deviceInfoModule from 'react-native-device-info';
import { View, Text, TextInput, Keyboard } from 'react-native';
import SignUpButton from '../SignUpButton';
import NextButton from '../NextButton';
import signUp from '../../assets/styles/signUp';
import { TouchableWithoutFeedback } from 'react-native';
import colors from '../../assets/colors/color';

function SetPassword(props) {
    let [passWord, setPassword] = useState('');
    let [confirmPassword, setConfirmPassword] = useState('');

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
            console.log('dismissed keyboard'); //console 확인용
        }}>
            <View style={signUp.container}>

                <View style={signUp.header}>
                    <Text style={signUp.headerFont}>NVP</Text>
                </View>
                <View style={signUp.title}>
                    <Text style={signUp.titleFont}>간편번호 생성</Text>
                </View>

                <View style={signUp.content} >
                    <View style={signUp.meesageContent}>
                        <Text style={signUp.contentFont}>간편번호 설정</Text>
                        <View style={signUp.meesageInnerContent}>
                            <TextInput style={signUp.messageInput}
                                placeholder="숫자 6자리 입력"
                                placeholderTextColor={colors.nvpUnder}
                                keyboardType="number-pad"
                                maxLength={6}
                                secureTextEntry
                                onChangeText={(inputPassword) => {
                                    setPassword(inputPassword);
                                }} />
                            <Text></Text>

                        </View>
                        <SignUpButton
                            buttonName="확인"
                            onPress={function () {
                                // if (props.auth.message === message) {

                                //     setSuccessMessage(true);
                                //     Alert.alert('인증에 성공하였습니다! 다음단계로 이동해주세요')
                                //     // props.navigation.navigate('SetPassword')
                                //     stopTimer();
                                //     Keyboard.dismiss();
                                // }
                                // else if (props.auth.message === alert.MESSAGE_TIME_EXPIRATION) {
                                //     Alert.alert('인증시간이 지났습니다! 재인증을 해주세요');
                                // }
                                // else {
                                //     Alert.alert('잘못된 인증번호입니다! 다시 입력해주세요')
                                // }
                            }} />

                    </View>

                    <View style={signUp.meesageContent}>
                        <Text style={signUp.contentFont}>간편번호 설정</Text>
                        <View style={signUp.meesageInnerContent}>
                            <TextInput style={signUp.messageInput}

                                keyboardType="number-pad"
                                maxLength={6}
                                secureTextEntry
                                onChangeText={(inputPassword) => {
                                    setConfirmPassword(inputPassword);
                                }} />
                            <Text style={signUp.pwInfo}>{props.pwState}</Text>
                        </View>
                        <SignUpButton
                            buttonName="확인"
                            onPress={function () {
                                // if (props.auth.message === message) {

                                //     setSuccessMessage(true);
                                //     Alert.alert('인증에 성공하였습니다! 다음단계로 이동해주세요')
                                //     // props.navigation.navigate('SetPassword')
                                //     stopTimer();
                                //     Keyboard.dismiss();
                                // }
                                // else if (props.auth.message === alert.MESSAGE_TIME_EXPIRATION) {
                                //     Alert.alert('인증시간이 지났습니다! 재인증을 해주세요');
                                // }
                                // else {
                                //     Alert.alert('잘못된 인증번호입니다! 다시 입력해주세요')
                                // }
                            }} />

                    </View>

                </View>

                <View style={signUp.footer}>
                    <NextButton
                        onPress={function () {
                            props.navigation.navigate('CheckCertificate')
                        }} />
                </View>

            </View >
        </TouchableWithoutFeedback >

    )
}

export default SetPassword;