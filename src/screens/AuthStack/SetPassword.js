import * as React from 'react';
import { View, Text, Button } from 'react-native';
import SetPassword from '../../containers/auth/SetPassword';
function SetPasswordScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <SetPassword navigation={navigation} />
        </View>
    );
}

export default SetPasswordScreen;