import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Keyboard, Alert } from 'react-native';
import authStyles from '../../assets/styles/authStyles';
import settingStyles from '../../assets/styles/setting';
import UserButton from '../UserButton';

function Logout({ props, navigation }) {

    console.log(navigation.popToTop())
    return (
        <View style={settingStyles.container}>
            <View style={settingStyles.settingView}>
                <Text style={settingStyles.contentFont}>정말로 로그아웃을 하시겠습니까?</Text>
                <View style={settingStyles.buttonView}>
                    <UserButton buttonName="로그아웃 하기"
                        onPress={function () {
                            // props.logout();
                            // props.navigation.navigate('Login');
                        }}
                    />
                </View>
            </View>
        </View>
    )

}

export default Logout;