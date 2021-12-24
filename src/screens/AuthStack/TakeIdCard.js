import * as React from 'react';
import { View } from 'react-native';
import TakeIdCard from '../../containers/auth/TakeIdCard';
function TakeIdCardScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TakeIdCard navigation={navigation} />
        </View>
    );
}

export default TakeIdCardScreen;