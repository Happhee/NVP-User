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
const padNumber = (num, length) => {
    return String(num).padStart(length, '0');
};


function ResetTextMessage(props) {
    let [passWord, setPassword] = useState('');
    let [name, setName] = useState('');
    let [phoneNumber, setPhoneNumber] = useState('');
    let [message, setMessage] = useState(alert.NO_EXIST_MESSAGE);

    const uniqueId = deviceInfoModule.getUniqueId();
    let [successMessage, setSuccessMessage] = useState(false);

    // 타이머를 초단위로 변환한 initialTime과 setInterval을 저장할 interval ref
    const [min, setMin] = useState(padNumber(3, 2));
    const [sec, setSec] = useState(padNumber(0, 2));
    const time = useRef(180);
    const timerId = useRef(null);


    console.log(props.auth);

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
            props.initMessage();
        }
    }, [sec]);


    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
            console.log('dismissed keyboard'); //console 확인용
        }}>
            <View style={signUp.container}>

                <View style={signUp.header}>
                    <Text style={signUp.titleFont}>Changing the password</Text>
                </View>

                <View style={signUp.registerInfo}>
                    <Text style={signUp.registerFont}>Identification to change the password</Text>
                </View>

                <View style={signUp.content} >
                    <View style={signUp.contentView}>

                        <Text style={signUp.contentFont}>Name</Text>

                        <TextInput style={signUp.contentInput}
                            onChangeText={(inputName) => {
                                setName(inputName);
                            }}
                        />
                    </View>

                    <View style={signUp.contentView}>
                        <Text style={signUp.contentFont}>Phone Number</Text>
                        <TextInput style={signUp.contentInput}
                            keyboardType="number-pad"
                            onChangeText={(inputPhoneNumber) => {
                                setPhoneNumber(inputPhoneNumber);
                            }} />
                        <SignUpButton
                            buttonName="Certified"
                            onPress={function () {
                                Keyboard.dismiss();
                                if (!isPhoneNumber(phoneNumber)) {
                                    Alert.alert('Invalid phone number');
                                    stopTimer();
                                } else {
                                    Alert.alert('The valid time is 3 minutes');
                                    props.postMessage(phoneNumber);
                                    props.getMessage(phoneNumber);
                                    startTimer();
                                }
                            }} />

                    </View>
                    <View style={signUp.meesageContent}>
                        <Text style={signUp.contentFont}>Authentication Number</Text>
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
                            buttonName="Check"
                            onPress={function () {
                                if (props.auth.message === message) {

                                    setSuccessMessage(true);
                                    Alert.alert('I succeeded in proving it! Please move on to the next step')
                                    // props.navigation.navigate('SetPassword')
                                    stopTimer();
                                    Keyboard.dismiss();
                                }
                                else if (props.auth.message === alert.MESSAGE_TIME_EXPIRATION) {
                                    Alert.alert('Time for proof has passed! Please re-certify it');
                                }
                                else {
                                    Alert.alert('Invalid authentication number! Please type it again')
                                }
                            }} />

                    </View>

                </View>


                <View style={signUp.footer}>
                    <NvpButton
                        icon="arrow-right"
                        onPress={function () {
                            if (isName(name) && successMessage) {
                                props.successMessage(uniqueId, name, phoneNumber);
                                props.navigation.navigate('ResetPassword')
                            }
                            else if (!isName(name)) {
                                Alert.alert('Please enter the correct name!')

                            } else {
                                Alert.alert('Please prove it!');
                            }
                        }} />
                </View>

            </View >
        </TouchableWithoutFeedback >

    )
}

export default ResetTextMessage;



