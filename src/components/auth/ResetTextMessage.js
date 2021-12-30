import React, { useEffect, useState } from 'react';
import deviceInfoModule from 'react-native-device-info';
import { View, Text, TextInput, Keyboard } from 'react-native';
import SignUpButton from '../SignUpButton';
import NvpButton from '../NvpButton';
import signUp from '../../assets/styles/signUp';

function ResetTextMessage(props) {
    let [passWord, setPassword] = useState('');
    let [name, setName] = useState('');
    let [phoneNumber, setPhoneNumber] = useState('');
    const uniqueId = deviceInfoModule.getUniqueId();

    return (
        <View style={signUp.container}>
            <View style={signUp.header}>
                <Text style={signUp.titleFont}>비밀번호 변경</Text>
            </View>

            <View style={signUp.registerInfo}>
                <Text style={signUp.registerFont}>비밀번호 변경을 위한 본인확인</Text>
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
                        onChangeText={(inputName) => {
                            setName(inputName);
                        }} />
                    <SignUpButton
                        buttonName="인증"
                        onPress={function () {
                            // props.navigation.navigate('')
                        }} />

                </View>
                <View style={signUp.contentView}>
                    <Text style={signUp.contentFont}>인증번호</Text>
                    <TextInput style={signUp.contentInput}
                        onChangeText={(inputName) => {
                            setName(inputName);
                        }} />
                    <SignUpButton
                        buttonName="확인"
                        onPress={function () {
                            props.navigation.navigate('CheckCertificate')
                        }} />
                </View>

            </View >
            <View style={signUp.footer}>
                <NvpButton
                    icon="arrow-right"

                    onPress={function () {
                        props.navigation.navigate('ResetPassword')
                    }} />
            </View>
        </View>
    )
}

export default ResetTextMessage;