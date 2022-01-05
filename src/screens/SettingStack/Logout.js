import * as React from 'react';
import { View, Text, Button } from 'react-native';
import Logout from '../../containers/Setting/Logout';
function LogoutScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Logout navigation={navigation} />
            <Button onPress={() => navigation.navigate('WithdrawalUser')} title="이동" />

        </View>
    );
}

export default LogoutScreen;