import * as React from 'react';
import { View, Text, Button } from 'react-native';
import TakeTextMessage from '../../containers/auth/TakeTextMessage';

function TakeTextMessageScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TakeTextMessage navigation={navigation} />
        </View>
    );
}

export default TakeTextMessageScreen;