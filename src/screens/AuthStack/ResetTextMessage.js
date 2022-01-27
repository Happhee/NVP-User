import * as React from 'react';
import { View } from 'react-native';
import ResetTextMessage from '../../containers/auth/ResetTextMessage';
function ResetTextMessageScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ResetTextMessage navigation={navigation} />
        </View>
    );
}

export default ResetTextMessageScreen;