import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Keyboard, Alert } from 'react-native';

import authStyles from '../../assets/styles/authStyles';

function Logout(props) {

    return (

        <View style={authStyles.container}>
            <View style={authStyles.header}>
                <Text style={authStyles.headerFont}>로그아웃</Text>
            </View>

        </View>
    )

}

export default Logout;