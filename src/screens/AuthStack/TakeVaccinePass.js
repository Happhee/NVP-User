import * as React from 'react';
import { View, Text, Button } from 'react-native';
import TakeVaccinePass from '../../containers/auth/TakeVaccinePass';
function TakeVaccinePassScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TakeVaccinePass navigation={navigation} />
        </View>
    );
}

export default TakeVaccinePassScreen;