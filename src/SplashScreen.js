import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { View, Text } from 'react-native';
import { useDispatch } from 'react-redux';

function SplashScreen({ navigation, props }) {
    const dispatch = useDispatch();


    useEffect(() => {
        setTimeout(() => {
            AsyncStorage.getItem('userUniqueId')
                .then((value) => {
                    if (value != null) {

                    } else {
                        navigation.replace('Auth');
                        console.log(value);

                    }
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