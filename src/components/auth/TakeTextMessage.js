import React, { useEffect, useState } from 'react';
import deviceInfoModule from 'react-native-device-info';
import { View, Text, TextInput, Keyboard } from 'react-native';
import SignUpButton from '../SignUpButton';
import NextButton from '../NextButton';
import signUp from '../../assets/styles/signUp';
import { TouchableWithoutFeedback } from 'react-native';

function TakeTextMessage(props) {
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