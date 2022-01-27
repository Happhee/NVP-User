import React, { useEffect, useState } from 'react';
import deviceInfoModule from 'react-native-device-info';
import { View, Text, TextInput, Keyboard } from 'react-native';
import SignUpButton from '../SignUpButton';
import NvpButton from '../NvpButton';
import signUp from '../../assets/styles/signUp';
import { TouchableWithoutFeedback } from 'react-native';
import colors from '../../assets/colors/color';
import { Alert } from 'react-native';
import settingStyles from '../../assets/styles/setting';
import { useNavigation } from '@react-navigation/native';

function SetPasswordUser(props) {
    let [password, setPassword] = useState('');
    let [confirmPassword, setConfirmPassword] = useState('');
    let [successPassword, setSuccessPassword] = useState(false);
    console.log('패스워드 설정')
    console.log(props.user);
    const navigation = useNavigation();

    console.log(password + '/' + confirmPassword)
    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
            console.log('dismissed keyboard'); //console 확인용
        }}>
            <View style={settingStyles.container}>
                <View style={settingStyles.headerView}>
                    <View style={settingStyles.headerTitle}>
                        <Text style={signUp.headerFont}>NVP</Text>
                    </View>
                    <View style={settingStyles.headerTitle}>
                        <Text style={signUp.titleFont}>Changing the password</Text>
                    </View>
                </View>


                <View style={settingStyles.passwordView} >
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
                                if (password.length === 6) {
                                    Alert.alert('Please check the simple number')
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
                                if (password === confirmPassword) {
                                    Alert.alert('I\'m done setting the password')

                                    setSuccessPassword(true);
                                    props.modifyPassword({ id: props.user.id, password: password });
                                    // navigation.navigate('SettingMain');
                                }
                                else {
                                    Alert.alert('The convenience number is different!')

                                }
                            }} />

                    </View>

                </View>


            </View >
        </TouchableWithoutFeedback >

    )
}

export default SetPasswordUser;