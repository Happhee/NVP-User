import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Keyboard, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import settingStyles from '../../assets/styles/setting';
import UserButton from '../UserButton';


function WithdrawalUser(props) {
    const navigation = useNavigation();
    return (

        <View style={settingStyles.container}>
            <View style={settingStyles.settingView}>
                <Text style={settingStyles.contentFont}>정말로 회원탈퇴를 하시겠습니까?</Text>
                <View style={settingStyles.buttonView}>
                    <UserButton buttonName="회원탈퇴 하기"
                        onPress={function () {
                            console.log(props.user.id);
                            props.deleteUser({ id: props.user.id });
                            navigation.replace('Auth');
                        }}
                    />
                </View>
            </View>
        </View>
    )

}

export default WithdrawalUser;