import * as React from 'react';
import { View, Button } from 'react-native';
import WithdrawalUser from '../../containers/Setting/WithdrawalUser';
function WithdrawalUserScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <WithdrawalUser navigation={navigation} />
        </View>
    );
}

export default WithdrawalUserScreen;