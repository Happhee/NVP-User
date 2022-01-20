import * as React from 'react';
import Login from '../../containers/auth/Login';
import { View, Text, Button } from 'react-native';

function LoginScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Login navigation={navigation} />
        </View>
    )
}

export default LoginScreen;