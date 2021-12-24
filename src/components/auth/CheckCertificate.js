import React, { useEffect, useState } from 'react';
import deviceInfoModule from 'react-native-device-info';
import { View, Text, TextInput, Keyboard } from 'react-native';
import RegisterButton from '../RegisterButton';
import NextButton from '../NextButton';
import signUp from '../../assets/styles/signUp';

function CheckCertificate(props) {
    let [passWord, setPassword] = useState('');
    let [name, setName] = useState('');
    let [phoneNumber, setPhoneNumber] = useState('');
    const uniqueId = deviceInfoModule.getUniqueId();

    return (

        <View style={signUp.container}>

            <View style={signUp.header}>
                <Text style={signUp.headerFont}>NVP</Text>
            </View>
            <View style={signUp.title}>
                <Text style={signUp.titleFont}>신분증/백신증명서</Text>
                <Text style={signUp.titleFont}>등록</Text>
            </View>

            <View style={signUp.content} >
                <RegisterButton buttonName="신분증 등록"
                    onPress={function () {
                        props.navigation.navigate('TakeIdCard')
                    }} />
                <RegisterButton buttonName="백신 증명서 등록" />
            </View>

            <View style={signUp.footer}>
                <NextButton
                    onPress={function () {
                        // props.navigation.navigate('SetPassword')
                    }} />
            </View>

        </View >

    )
}

export default CheckCertificate;