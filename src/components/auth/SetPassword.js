import React, { useEffect, useState } from 'react';
import deviceInfoModule from 'react-native-device-info';
import { View, Text, TextInput, Keyboard } from 'react-native';
import SignUpButton from '../SignUpButton';
import NextButton from '../NextButton';
import signUp from '../../assets/styles/signUp';
import { TouchableWithoutFeedback } from 'react-native';
import colors from '../../assets/colors/color';
import { Alert } from 'react-native';

function SetPassword(props) {
    let [passWord, setPassword] = useState('');
    let [confirmPassword, setConfirmPassword] = useState('');
    let [successPassword, setSuccessPassword] = useState(false);
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
                                Keyboard.dismiss();
                                if (passWord.length === 6) {
                                    Alert.alert('간편번호 확인을 진행해주세요')
                                }
                                else {
                                    Alert.alert('간편번호는 6자리로 입력해주세요')
                                }
                            }} />

                    </View>

                    <View style={signUp.meesageContent}>
                        <Text style={signUp.contentFont}>간편번호 확인</Text>
                        <View style={signUp.meesageInnerContent}>
                            <TextInput style={signUp.messageInput}
                                placeholder="간편번호 재확인"
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
                                Keyboard.dismiss();
                                if (passWord === confirmPassword) {
                                    Alert.alert('비밀번호 설정이 완료되었습니다')
                                    setSuccessPassword(true);
                                    // props.navigation.navigate('CheckCertificate')
                                }
                                else {
                                    Alert.alert('간편번호가 다릅니다!!')
                                }
                            }} />

                    </View>

                </View>

                <View style={signUp.footer}>
                    <NextButton
                        onPress={function () {
                            if (successPassword) {
                                props.navigation.navigate('CheckCertificate')

                            } else {
                                Alert.alert('간편번호 설정 및 확인을 진행해주세요')
                            }
                        }} />
                </View>

            </View >
        </TouchableWithoutFeedback >

    )
}

export default SetPassword;