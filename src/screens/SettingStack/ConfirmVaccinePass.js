import * as React from 'react';
import { View, Text, Button } from 'react-native';
import ConfirmVaccinePass from '../../containers/Setting/ConfirmVaccinePass';
function ConfrimVaccinePassScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ConfirmVaccinePass navigation={navigation} />
            <Button onPress={() => navigation.navigate('Logout')} title="이동" />


        </View>
    );
}

export default ConfrimVaccinePassScreen;