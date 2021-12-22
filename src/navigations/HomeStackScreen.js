import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyCretificateScreen from '../screens/HomeStack/MyCretificate';

const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
    return (
        <Stack.Navigator>
            <HomeStack.Screen name="MyCretificate" component={MyCretificateScreen} />
        </Stack.Navigator>
    )
}

export default HomeStackScreen;