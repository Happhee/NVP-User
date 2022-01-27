import * as React from 'react';
import { View } from 'react-native';
import ResetPassword from '../../containers/auth/ResetPassword';
function ResetPasswordScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ResetPassword navigation={navigation} />
        </View>
    );
}

export default ResetPasswordScreen;