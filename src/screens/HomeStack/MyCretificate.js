import * as React from 'react';
import { View, Text, Button } from 'react-native';

function MyCretificateScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>MyCretificateScreen </Text>
            <Button 
            title="NVP"/>
        </View>
    );
}

export default MyCretificateScreen;