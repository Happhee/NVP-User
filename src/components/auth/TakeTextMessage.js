import React, { useEffect, useState } from 'react';
import deviceInfoModule from 'react-native-device-info';
import { View, Text, TextInput, Keyboard } from 'react-native';
import { Button } from 'react-native-paper'
import UserButton from '../UserButton';
import colors from '../../assets/colors/color';
import authStyles from '../../assets/styles/authStyles';
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
            <View style={authStyles.container}>

                <View style={authStyles.header}>
                    <Text style={authStyles.headerFont}>NVP</Text>
                </View>
                <View style={authStyles.title}>
                    <Text style={authStyles.titleFont}>회원가입</Text>
                </View>

                <View style={authStyles.content} >
                    <View style={authStyles.contentView}>

                        <Text style={authStyles.contentFont}>이름</Text>

                        <TextInput style={authStyles.contentInput}
                            onChangeText={(inputName) => {
                                setName(inputName);
                            }}
                        />
                    </View>
                    <View style={authStyles.contentView}>
                        <Text style={authStyles.contentFont}>전화번호</Text>
                        <TextInput style={authStyles.contentInput}
                            onChangeText={(inputName) => {
                                setName(inputName);
                            }} />
                        <UserButton
                            buttonName="인증"
                            onPress={function () {
                                props.navigation.navigate('CheckCertificate')
                            }} />

                    </View>
                    <View style={authStyles.contentView}>
                        <Text style={authStyles.contentFont}>인증번호</Text>
                        <TextInput style={authStyles.contentInput}
                            onChangeText={(inputName) => {
                                setName(inputName);
                            }} />
                        <UserButton
                            buttonName="확인"
                            onPress={function () {
                                props.navigation.navigate('CheckCertificate')
                            }} />

                    </View>


                </View>

                <View style={authStyles.footer}>

                    <UserButton
                        buttonName="->"
                        onPress={function () {
                            props.navigation.navigate('CheckCertificate')
                        }} />
                </View>

            </View >
        </TouchableWithoutFeedback>

    )
}

export default TakeTextMessage;