import React, { useEffect, useState, useRef } from 'react';
import deviceInfoModule from 'react-native-device-info';
import { View, Text, TextInput, Keyboard, Alert } from 'react-native';
import SignUpButton from '../SignUpButton';
import NextButton from '../NextButton';
import signUp from '../../assets/styles/signUp';
import { TouchableWithoutFeedback } from 'react-native';
import { Modal, Portal, Button, Provider } from 'react-native-paper';

import { isPhoneNumber } from '../../utils/regexs';
import * as alert from '../../utils/alertConsts'
import Timer from '../Timer';
const padNumber = (num, length) => {
    return String(num).padStart(length, '0');
};
function TakeTextMessage(props) {
    let [passWord, setPassword] = useState('');
    let [name, setName] = useState('');
    let [phoneNumber, setPhoneNumber] = useState('');
    let [message, setMessage] = useState(alert.NO_EXIST_MESSAGE);

    const uniqueId = deviceInfoModule.getUniqueId();

    const tempMin = 0;
    const tempSec = 5;
    // 타이머를 초단위로 변환한 initialTime과 setInterval을 저장할 interval ref
    const initialTime = useRef(tempMin * 60 + tempSec);
    const interval = useRef(null);

    const [min, setMin] = useState(padNumber(tempMin, 2));
    const [sec, setSec] = useState(padNumber(tempSec, 2));

    const startTimer = () => {
        interval.current = setInterval(() => {
            initialTime.current -= 1;
            setSec(padNumber(initialTime.current % 60, 2));
            setMin(padNumber(parseInt(initialTime.current / 60), 2));
        }, 1000);
        return () => clearInterval(interval.current);
    }

    useEffect(() => {
        if (initialTime.current <= 0) {
            clearInterval(interval.current);
        }
    }, [sec]);


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
                                setMin(padNumber(tempMin, 2));
                                setSec(padNumber(tempSec, 2));
                                if (!isPhoneNumber(phoneNumber)) {
                                    Alert.alert('잘못된 형식의 전화번호입니다');
                                } else {
                                    Alert.alert('인증 유효시간은 3분입니다');
                                    props.postMessage(phoneNumber);
                                    props.getMessage(phoneNumber);

                                    startTimer();
                                }
                            }} />

                    </View>
                    <View style={signUp.contentView}>
                        <Text style={signUp.contentFont}>인증번호</Text>
                        <TextInput style={signUp.contentInput}
                            keyboardType="number-pad"
                            maxLength={6}
                            onChangeText={(inputNumber) => {
                                setMessage(inputNumber);
                            }} />
                        <Text>{min}:{sec}</Text>
                        <SignUpButton
                            buttonName="확인"
                            onPress={function () {
                                if (props.auth.message === message) {
                                    props.navigation.navigate('CheckCertificate')
                                }
                                else if (props.auth.message === '') {
                                    Alert.alert('인증시간이 지났습니다! 재인증을 해주세요');
                                }
                                else {
                                    Alert.alert('잘못된 인증번호입니다! 다시 입력해주세요')
                                }
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