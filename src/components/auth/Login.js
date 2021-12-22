import React, { useState } from 'react';
import deviceInfoModule from 'react-native-device-info';
import { View, Text, Button, TextInput } from 'react-native';

function Login(props) {
    let [passWord, setPassword] = useState('');
    const uniqueId = deviceInfoModule.getUniqueId();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>LoginScreen </Text>
            <TextInput placeholder="PW"
                onChangeText={inputPw => setPassword(inputPw)}
            />
            <Button
                onPress={function () {
                    const dataToSubmit = {
                        uniqueId: uniqueId,
                        passWord: passWord
                    }
                    props.onPressLogin(dataToSubmit);
                    setSimplePW('');
                }}
                title="LOGIN"
            ></Button>
        </View >
    )
}

export default Login;