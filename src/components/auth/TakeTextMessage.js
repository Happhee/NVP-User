import React, { useEffect, useState, useRef } from 'react';
import deviceInfoModule from 'react-native-device-info';
import { View, Text, TextInput, Keyboard, Alert } from 'react-native';
import SignUpButton from '../SignUpButton';
import NvpButton from '../NvpButton';
import signUp from '../../assets/styles/signUp';
import { TouchableWithoutFeedback } from 'react-native';
import { Modal, Portal, Button, Provider } from 'react-native-paper';

import { isPhoneNumber, isName } from '../../utils/regexs';
import Timer from '../Timer';
import { MESSAGE_TIME_OUT, NO_EXIST_MESSAGE } from '../../store/actions/actionTypes';
const padNumber = (num, length) => {
    return String(num).padStart(length, '0');
};


function TakeTextMessage(props) {
    let [passWord, setPassword] = useState('');
    let [name, setName] = useState('');
    let [phone, setPhone] = useState('');
    let [message, setMessage] = useState(NO_EXIST_MESSAGE);

    const id = deviceInfoModule.getUniqueId();
    let [successMessage, setSuccessMessage] = useState(false);

    // 타이머를 초단위로 변환한 initialTime과 setInterval을 저장할 interval ref
    const [min, setMin] = useState(padNumber(3, 2));
    const [sec, setSec] = useState(padNumber(0, 2));
    const time = useRef(180);
    const timerId = useRef(null);


    // console.log(props.auth);
    console.log(props.sms);

    const startTimer = () => {
        clearInterval(timerId.current);
        time.current = 180;
        setMin(padNumber(3, 2));
        setSec(padNumber(0, 2));
        timerId.current = setInterval(() => {
            time.current -= 1;
            setSec(padNumber(time.current % 60, 2));
            setMin(padNumber(parseInt(time.current / 60), 2));
        }, 1000);


    }
    const stopTimer = () => {
        setMin(padNumber(3, 2));
        setSec(padNumber(0, 2));
        clearInterval(timerId.current);
    }
    useEffect(() => {
        if (time.current <= 0) {
            clearInterval(timerId.current);
            props.expireSmsMessage();
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
                            onChangeText={(inputPhone) => {
                                setPhone(inputPhone);
                            }} />
                        <SignUpButton
                            buttonName="인증"
                            onPress={function () {
                                Keyboard.dismiss();
                                if (!isPhoneNumber(phone)) {
                                    Alert.alert('잘못된 형식의 전화번호입니다');
                                    stopTimer();
                                } else {
                                    Alert.alert('인증 유효시간은 3분입니다');
                                    props.postMessage({ phone: phone });
                                    startTimer();
                                }
                            }} />

                    </View>
                    <View style={signUp.meesageContent}>
                        <Text style={signUp.contentFont}>인증번호</Text>
                        <View style={signUp.meesageInnerContent}>
                            <TextInput style={signUp.messageInput}
                                keyboardType="number-pad"
                                maxLength={6}
                                secureTextEntry
                                onChangeText={(inputNumber) => {
                                    setMessage(inputNumber);
                                }} />
                            <Text>{min}:{sec}</Text>

                        </View>
                        <SignUpButton
                            buttonName="확인"
                            onPress={function () {

                                if (parseInt(props.sms.message) === parseInt(message)) {

                                    setSuccessMessage(true);
                                    Alert.alert('인증에 성공하였습니다! 다음단계로 이동해주세요')
                                    // props.navigation.navigate('SetPassword')
                                    stopTimer();
                                    Keyboard.dismiss();
                                }
                                else if (props.sms.message === MESSAGE_TIME_OUT) {
                                    Alert.alert('인증시간이 지났습니다! 재인증을 해주세요');
                                    Keyboard.dismiss();
                                }
                                else {
                                    Alert.alert('잘못된 인증번호입니다! 다시 입력해주세요')
                                }
                            }} />

                    </View>

                </View>


                <View style={signUp.footer}>
                    <NvpButton
                        icon="arrow-right"
                        onPress={function () {
                            if (isName(name) && successMessage) {
                                props.verifySmsMessage(id, name, phone);
                                props.navigation.navigate('SetPassword')
                            }
                            else if (!isName(name)) {
                                Alert.alert('이름을 올바르게 입력해주세요!')

                            } else {
                                Alert.alert('인증을 진행해주세요!');
                            }
                        }} />
                </View>

            </View >
        </TouchableWithoutFeedback >

    )
}

export default TakeTextMessage;