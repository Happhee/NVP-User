import React, { useEffect, useState } from 'react';
import deviceInfoModule from 'react-native-device-info';
import { View, Text, TextInput, Keyboard } from 'react-native';
import RegisterButton from '../RegisterButton';
import NvpButton from '../NvpButton';
import signUp from '../../assets/styles/signUp';
import ocrStyles from '../../assets/styles/ocrStyles';
import { TouchableWithoutFeedback } from 'react-native';
import RectangleCamera from '../RectangleCamera';

function TakeIdCard(props) {
    console.log(props.auth)
    return (

        <View style={signUp.container}>

            <View style={signUp.header}>
                <Text style={signUp.titleFont}>ID card registration</Text>
            </View>
            <View style={signUp.registerInfo}>
                <Text style={signUp.registerFont}>Please take an ID so that a square box appears</Text>
            </View>

            <View style={signUp.cameraView} >
                <RectangleCamera setIdCard={(idCardName, idCardFilePath) => {

                    props.setIdCard(idCardName, idCardFilePath)
                    props.navigation.navigate('CheckCertificate')

                }
                } />
            </View>

        </View >

    )
}

export default TakeIdCard;