import React, { useEffect, useState } from 'react';
import deviceInfoModule from 'react-native-device-info';
import { View, Text, TextInput, Keyboard } from 'react-native';
import SignUpButton from '../SignUpButton';
import NvpButton from '../NvpButton';
import signUp from '../../assets/styles/signUp';
import { TouchableWithoutFeedback } from 'react-native';
import colors from '../../assets/colors/color';
import { Alert } from 'react-native';

function ReSetPassword(props) {
    let [passWord, setPassword] = useState('');
    let [confirmPassword, setConfirmPassword] = useState('');
    let [successPassword, setSuccessPassword] = useState(false);
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
                    <Text style={signUp.titleFont}>Simple Password reset</Text>
                </View>

                <View style={signUp.content} >
                    <View style={signUp.contentView}>
                        <Text style={signUp.contentFont}>New   Simple     Password</Text>
                        <View style={signUp.meesageInnerContent}>
                            <TextInput style={signUp.messageInput}
                                placeholder="6 digits"
                                placeholderTextColor={colors.nvpUnder}
                                keyboardType="number-pad"
                                maxLength={6}
                                secureTextEntry
                                onChangeText={(inputPassword) => {
                                    setPassword(inputPassword);
                                }} />
                        </View>
                        <SignUpButton
                            buttonName="Set"
                            onPress={function () {
                                Keyboard.dismiss();
                                if (passWord.length === 6) {
                                    Alert.alert('Please check the simple number')
                                }
                                else {
                                    Alert.alert('Please enter the simple number in 6 digits')
                                }
                            }} />

                    </View>

                    <View style={signUp.contentView}>
                        <Text style={signUp.contentFont}>Check the simple number</Text>
                        <View style={signUp.meesageInnerContent}>
                            <TextInput style={signUp.messageInput}
                                placeholderTextColor={colors.nvpUnder}

                                placeholder="6 digits"
                                keyboardType="number-pad"
                                maxLength={6}
                                secureTextEntry
                                onChangeText={(inputPassword) => {
                                    setConfirmPassword(inputPassword);
                                }} />
                        </View>
                        <SignUpButton
                            buttonName="Check"
                            onPress={function () {
                                Keyboard.dismiss();
                                if (passWord === confirmPassword) {
                                    Alert.alert('I\'m done setting the password')
                                    setSuccessPassword(true);
                                    props.setPassword(passWord);
                                    // props.navigation.navigate('CheckCertificate')
                                }
                                else {
                                    Alert.alert('The convenience number is different!')
                                }
                            }} />

                    </View>

                </View>

                <View style={signUp.footer}>
                    <NvpButton
                        icon="check"
                        onPress={function () {
                            if (successPassword) {
                                props.navigation.navigate('Login')
                            } else {
                                Alert.alert('Please set and check the simple number.')
                            }
                        }} />
                </View>

            </View >
        </TouchableWithoutFeedback >

    )
}

export default ReSetPassword;