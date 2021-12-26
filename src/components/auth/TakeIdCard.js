import React, { useEffect, useState } from 'react';
import deviceInfoModule from 'react-native-device-info';
import { View, Text, TextInput, Keyboard } from 'react-native';
import RegisterButton from '../RegisterButton';
import NextButton from '../NextButton';
import signUp from '../../assets/styles/signUp';
import { TouchableWithoutFeedback } from 'react-native';
import RectangleCamera from '../RectangleCamera';

function TakeIdCard(props) {
    let [passWord, setPassword] = useState('');
    let [name, setName] = useState('');
    let [phoneNumber, setPhoneNumber] = useState('');
    const uniqueId = deviceInfoModule.getUniqueId();

    return (

        <View style={signUp.container}>

            <View style={signUp.header}>
                <Text style={signUp.titleFont}>신분증 등록</Text>
            </View>
            <View style={signUp.registerInfo}>
                <Text style={signUp.registerFont}>네모 상자가 나타나게 신분증을 찍어주세요</Text>
            </View>

            <View style={signUp.cameraView} >
                <RectangleCamera />
            </View>
            {/* </View>

            <View style={signUp.footer}>
                <NextButton
                    onPress={function () {
                        props.navigation.navigate('CheckCertificate')
                    }} />
            </View> */}

        </View >

    )
}

export default TakeIdCard;