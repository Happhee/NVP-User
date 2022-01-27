import React, { useEffect, useState } from 'react';
import deviceInfoModule from 'react-native-device-info';
import { View, Text, TextInput, Keyboard, Alert } from 'react-native';
import RegisterButton from '../RegisterButton';
import NvpButton from '../NvpButton';
import signUp from '../../assets/styles/signUp';

function getFormatDate(date) {
    let year = date.getFullYear();
    let month = (1 + date.getMonth());
    month = month >= 10 ? month : '0' + month;
    let day = date.getDate();
    day = day > 10 ? day : '0' + day;
    return year + '/' + month + '/' + day;
}
function CheckCertificate(props) {

    console.log(props.auth);
    let [icon, setIcon] = useState("remove")

    useEffect(() => {
        if (
            // props.auth.name === props.auth.idCardName
            // && props.auth.name === props.auth.vaccinePassName
            props.auth.idCardName != '' &&
            props.auth.vaccinePassName != ''
            &&
            props.auth.idCardName === props.auth.vaccinePassName) {
            setIcon("check")
        }
    }, [props.auth.vaccinePassName, props.auth.idCardName])

    return (

        <View style={signUp.container}>

            <View style={signUp.header}>
                <Text style={signUp.headerFont}>NVP</Text>
            </View>
            <View style={signUp.title}>
                <Text style={signUp.titleFont}>Registeration</Text>
            </View>

            <View style={signUp.content} >
                <RegisterButton buttonName="Id Card"
                    onPress={function () {
                        props.navigation.navigate('TakeIdCard')
                    }} />
                <RegisterButton buttonName="Vaccine Pass"
                    onPress={function () {
                        props.navigation.navigate('TakeVaccinePass')
                    }} />
            </View>

            <View style={signUp.footer}>
                <NvpButton
                    icon={icon}
                    onPress={function () {
                        if (icon === "remove") {
                            Alert.alert("Please register your ID and vaccine certificate!")
                        } else {
                            const nowDate = new Date();

                            const dataToSubmit = {
                                id: props.auth.id,
                                password: props.auth.password,
                                name: props.auth.name,
                                phone: props.auth.phone,
                                filename: props.auth.vaccinePassName,
                                filedate: getFormatDate(new Date())
                            }
                            const formData = new FormData();
                            console.log(formData);
                            const photo = {
                                uri: props.auth.vaccinePassFilePath,
                                type: 'multipart/form-data',
                                name: `${props.auth.fileName}.jpg`
                            }
                            formData.append('image', photo);
                            console.log('폼데이터');

                            console.log(formData);
                            props.uploadCertificate(formData);
                            props.signup(dataToSubmit);
                            Alert.alert("SIGN UP SUCCESS ")

                            props.navigation.navigate('Login')

                        }
                    }} />
            </View>

        </View >

    )
}

export default CheckCertificate;