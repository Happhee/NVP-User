import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Keyboard, Alert } from 'react-native';

import authStyles from '../../assets/styles/authStyles';

function WithdrawalUser(props) {

    return (

        <View style={authStyles.container}>
            <View style={authStyles.header}>
                <Text style={authStyles.headerFont}>회원탈퇴</Text>
            </View>

        </View>
    )

}

export default WithdrawalUser;