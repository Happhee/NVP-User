import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { View, Text } from 'react-native';
function SplashScreen({ navigation }) {

    useEffect(() => {
        setTimeout(() => {
            AsyncStorage.getItem('userUniqueId')
                .then((value) => {
                    navigation.replace(value === null ? 'Auth' : 'Main');
                    console.log(value);
                }
                );

        }, 3000);
    }, []);

    return (
        <View >
            <Text>스플래쉬 화면</Text>
        </View>
    )
}

export default SplashScreen;