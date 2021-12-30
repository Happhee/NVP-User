import React, { useEffect, useState } from 'react';
import deviceInfoModule from 'react-native-device-info';
import { View, Text, TextInput, Keyboard } from 'react-native';
import SignUpButton from '../SignUpButton';
import NvpButton from '../NvpButton';
import signUp from '../../assets/styles/signUp';
import { TouchableWithoutFeedback } from 'react-native';

function ResetPassword(props) {
    let [passWord, setPassword] = useState('');
    let [name, setName] = useState('');
    let [phoneNumber, setPhoneNumber] = useState('');
    const uniqueId = deviceInfoModule.getUniqueId();

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
                    <View style={signUp.pwView}>

                        <Text style={signUp.contentFont}>간편번호설정</Text>
                        <View style={signUp.pwInfoView}>

                            <TextInput style={signUp.contentInput}
                                placeholder="숫자 6자리 입력"
                                keyboardType="number-pad"
                                onChangeText={(inputName) => {
                                    setName(inputName);
                                }}
                            />
                            <Text></Text>
                        </View>

                    </View>

                    <View style={signUp.pwView}>
                        <Text style={signUp.contentFont}>간편번호 확인</Text>
                        <View style={signUp.pwInfoView}>
                            <TextInput style={signUp.contentInput}
                                keyboardType="number-pad"
                                onChangeText={(inputName) => {
                                    setName(inputName);
                                }} />
                            <Text style={signUp.pwInfo}>{props.pwState}</Text>

                        </View>

                    </View>
                </View>

                <View style={signUp.footer}>
                    <NvpButton
                        onPress={function () {
                            props.navigation.navigate('Login')
                        }} />
                </View>

            </View >
        </TouchableWithoutFeedback >

    )
}

export default ResetPassword;