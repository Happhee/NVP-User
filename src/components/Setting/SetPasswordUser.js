import React, { useEffect, useState } from 'react';
import deviceInfoModule from 'react-native-device-info';
import { View, Text, TextInput, Keyboard } from 'react-native';
import SignUpButton from '../SignUpButton';
import NvpButton from '../NvpButton';
import signUp from '../../assets/styles/signUp';
import { TouchableWithoutFeedback } from 'react-native';
import colors from '../../assets/colors/color';
import { Alert } from 'react-native';
import settingStyles from '../../assets/styles/setting';
import { useNavigation } from '@react-navigation/native';

function SetPasswordUser(props) {
    let [password, setPassword] = useState('');
    let [confirmPassword, setConfirmPassword] = useState('');
    let [successPassword, setSuccessPassword] = useState(false);
    console.log('패스워드 설정')
    console.log(props.user);
    const navigation = useNavigation();

    console.log(password + '/' + confirmPassword)
    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
            console.log('dismissed keyboard'); //console 확인용
        }}>
            <View style={settingStyles.container}>
                <View style={settingStyles.headerView}>
                    <View style={settingStyles.headerTitle}>
                        <Text style={signUp.headerFont}>NVP</Text>
                    </View>
                    <View style={settingStyles.headerTitle}>
                        <Text style={signUp.titleFont}>비밀번호 변경</Text>
                    </View>
                </View>


                <View style={settingStyles.passwordView} >
                    <View style={signUp.contentView}>
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
                        </View>
                        <SignUpButton
                            buttonName="설정"
                            onPress={function () {
                                Keyboard.dismiss();
                                if (password.length === 6) {
                                    Alert.alert('간편번호 확인을 진행해주세요')
                                }
                                else {
                                    Alert.alert('간편번호는 6자리로 입력해주세요')
                                }
                            }} />
                    </View>

                    <View style={signUp.contentView}>
                        <Text style={signUp.contentFont}>간편번호 확인</Text>
                        <View style={signUp.meesageInnerContent}>
                            <TextInput style={signUp.messageInput}
                                placeholderTextColor={colors.nvpUnder}

                                placeholder="간편번호 재확인"
                                keyboardType="number-pad"
                                maxLength={6}
                                secureTextEntry
                                onChangeText={(inputPassword) => {
                                    setConfirmPassword(inputPassword);
                                }} />
                        </View>
                        <SignUpButton
                            buttonName="확인"
                            onPress={function () {
                                Keyboard.dismiss();
                                if (password === confirmPassword) {
                                    Alert.alert('비밀번호가 변경되었습니다')
                                    setSuccessPassword(true);
                                    props.modifyPassword({ id: props.user.id, password: password });
                                    // navigation.navigate('SettingMain');
                                }
                                else {
                                    Alert.alert('간편번호가 다릅니다!!')
                                }
                            }} />

                    </View>

                </View>


            </View >
        </TouchableWithoutFeedback >

    )
}

export default SetPasswordUser;