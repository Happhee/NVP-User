import * as React from 'react';
import { View, Text, Button } from 'react-native';
import Logout from '../../containers/Setting/Logout';
function LogoutScreen(props) {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Logout appNavigation={props.appNavigation} />
        </View>
    );
}

export default LogoutScreen;