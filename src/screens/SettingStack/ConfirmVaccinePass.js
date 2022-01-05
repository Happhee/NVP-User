import * as React from 'react';
import { View, Text, Button } from 'react-native';
import ConfirmVaccinePass from '../../containers/Setting/ConfirmVaccinePass';
function ConfrimVaccinePassScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ConfirmVaccinePass />
        </View>
    );
}

export default ConfrimVaccinePassScreen;