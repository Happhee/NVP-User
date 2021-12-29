import React, { useEffect, useState, useCallback } from 'react';
import deviceInfoModule from 'react-native-device-info';
import { View, Text, TextInput, Keyboard, Image } from 'react-native';
import RegisterButton from '../RegisterButton';
import NextButton from '../NextButton';
import signUp from '../../assets/styles/signUp';
import { TouchableWithoutFeedback } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

function TakeVaccinePass(props) {

    let [imageUri, setImageUri] = useState('');
    const openPicker = () => {
        launchImageLibrary({}, (response) => {

            console.log(response.assets[0].uri);
            setImageUri(response.assets[0].uri);
        })
    }
    return (

        <View style={signUp.container}>

            <View style={signUp.header}>
                <Text style={signUp.titleFont}>백신 증명서 등록</Text>
            </View>

            <View style={signUp.cameraRoll} >
                <RegisterButton buttonName="쿠브 인증서 가져오기"
                    onPress={openPicker} />
            </View>
            <View style={signUp.cameraView}>
                <Image
                    source={{ uri: imageUri }} style={{ width: '100%', height: '100%' }} />
            </View>
            <View style={signUp.footer}>
                <NextButton
                    onPress={function () {
                        props.navigation.navigate('CheckCertificate')
                    }} />
            </View>

        </View >

    )
}

export default TakeVaccinePass;