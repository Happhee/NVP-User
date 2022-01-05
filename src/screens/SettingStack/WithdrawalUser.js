import * as React from 'react';
import { View, Button } from 'react-native';
import WithdrawalUser from '../../containers/Setting/WithdrawalUser';
function WithdrawalUserScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <WithdrawalUser navigation={navigation} />
            <Button onPress={() => navigation.navigate('SettingMain')} title="이동" />

        </View>
    );
}

export default WithdrawalUserScreen;