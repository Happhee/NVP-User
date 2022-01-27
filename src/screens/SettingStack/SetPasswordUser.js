import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import SetPassword from '../../containers/Setting/SetPassword';
function SetPasswordUserScreen(props) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <SetPassword />
        </View>
    );
}

export default SetPasswordUserScreen;