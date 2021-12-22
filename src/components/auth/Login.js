import React, { useState } from 'react';
import deviceInfoModule from 'react-native-device-info';
import { View, Text, TextInput } from 'react-native';
import { Button } from 'react-native-paper'
function Login(props) {
    let [passWord, setPassword] = useState('');
    const uniqueId = deviceInfoModule.getUniqueId();
    console.log(props)
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>LoginScreen </Text>
            <TextInput placeholder="PW"
                onChangeText={inputPw => setPassword(inputPw)}
            />
            <Button
                mode="contained"
                onPress={function () {
                    const dataToSubmit = {
                        uniqueId: uniqueId,
                        passWord: passWord
                    }
                    props.onPressLogin(dataToSubmit);
                    setPassword('');
                }}>LOGIN</Button>
        </View >
    )
}

export default Login;