import React, { useEffect, useState } from 'react';
import deviceInfoModule from 'react-native-device-info';
import { View, Text, TextInput, Keyboard } from 'react-native';
import RegisterButton from '../RegisterButton';
import NextButton from '../NextButton';
import signUp from '../../assets/styles/signUp';
import { TouchableWithoutFeedback } from 'react-native';

function TakeVaccinePass(props) {
    let [passWord, setPassword] = useState('');
    let [name, setName] = useState('');
    let [phoneNumber, setPhoneNumber] = useState('');
    const uniqueId = deviceInfoModule.getUniqueId();

    return (

        <View style={signUp.container}>

            <View style={signUp.header}>
                <Text style={signUp.titleFont}>백신 증명서 등록</Text>
            </View>
            <View style={signUp.registerInfo}>
                <Text style={signUp.registerFont}>본인 백신 증명서를 등록해주세요</Text>
            </View>

            <View style={signUp.content} >

            </View>

            <View style={signUp.footer}>
                <NextButton
                    onPress={function () {
                        props.navigation.navigate('CheckCertificate')
                    }} />
            </View>

        </View >

    )
}

export default TakeVaccinePass;