import * as React from 'react';
import Login from '../../containers/auth/Login';
import { View, Text, Button } from 'react-native';

function LoginScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Login />
        </View>
    )
}

export default LoginScreen;