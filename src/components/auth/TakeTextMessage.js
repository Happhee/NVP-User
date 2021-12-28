import React, { useEffect, useState } from 'react';
import deviceInfoModule from 'react-native-device-info';
import { View, Text, TextInput, Keyboard, Alert } from 'react-native';
import SignUpButton from '../SignUpButton';
import NextButton from '../NextButton';
import signUp from '../../assets/styles/signUp';
import { TouchableWithoutFeedback } from 'react-native';
import { Modal, Portal, Button, Provider } from 'react-native-paper';

import { isPhoneNumber } from '../../utils/regexs';

function TakeTextMessage(props) {
    let [passWord, setPassword] = useState('');
    let [name, setName] = useState('');
    let [phoneNumber, setPhoneNumber] = useState('');
    const uniqueId = deviceInfoModule.getUniqueId();
    console.log(props.auth.phoneNumber);

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
                    <Text style={signUp.titleFont}>회원가입</Text>
                </View>

                <View style={signUp.content} >
                    <View style={signUp.contentView}>

                        <Text style={signUp.contentFont}>이름</Text>

                        <TextInput style={signUp.contentInput}
                            onChangeText={(inputName) => {

                                setName(inputName);
                            }}
                        />
                    </View>

                    <View style={signUp.contentView}>
                        <Text style={signUp.contentFont}>전화번호</Text>
                        <TextInput style={signUp.contentInput}
                            keyboardType="number-pad"
                            onChangeText={(inputPhoneNumber) => {

                                setPhoneNumber(inputPhoneNumber);
                            }} />
                        <SignUpButton
                            buttonName="인증"
                            onPress={function () {
                                Keyboard.dismiss();
                                if (!isPhoneNumber(phoneNumber)) {
                                    Alert.alert('잘못된 형식의 전화번호입니다');
                                } else {
                                    Alert.alert('인증 유효시간은 3분입니다');
                                }

                            }} />

                    </View>
                    <View style={signUp.contentView}>
                        <Text style={signUp.contentFont}>인증번호</Text>
                        <TextInput style={signUp.contentInput}
                            keyboardType="number-pad"
                            maxLength={6}
                            onChangeText={(inputName) => {
                                setName(inputName);
                            }} />
                        <SignUpButton
                            buttonName="확인"
                            onPress={function () {
                                props.navigation.navigate('CheckCertificate')
                            }} />

                    </View>
                </View>


                <View style={signUp.footer}>
                    <NextButton
                        onPress={function () {
                            props.navigation.navigate('SetPassword')
                        }} />
                </View>

            </View >
        </TouchableWithoutFeedback >

    )
}

export default TakeTextMessage;