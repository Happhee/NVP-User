import * as React from 'react';
import { View } from 'react-native';
import CheckCertificate from '../../containers/auth/CheckCertificate';

function CheckCertificateScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <CheckCertificate navigation={navigation} />
        </View>
    );
}

export default CheckCertificateScreen;