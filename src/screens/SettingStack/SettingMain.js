import * as React from 'react';
import { View, Text, Button } from 'react-native';
import SettingMain from '../../containers/Setting/SettingMain';
function SettingMainScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <SettingMain navigation={navigation} />
            <Button onPress={() => navigation.navigate('ConfirmVaccinePass')} title="이동" />

        </View>
    );
}

export default SettingMainScreen;