import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Keyboard, Alert, Button } from 'react-native';

import authStyles from '../../assets/styles/authStyles';

function ConfrimVaccinePass(props) {


    return (

        <View style={authStyles.container}>
            <View style={authStyles.header}>
                <Text style={authStyles.headerFont}>백신패스 확인</Text>
                <Button onPress={() => {
                    props.downLoadCertificate({ filename: 'redux.png' });

                }} title="가져오기" />
            </View>

        </View>
    )

}

export default ConfrimVaccinePass;