import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import { autoLogin } from '../../store/actions/userAction';
import colors from '../../assets/colors/color'
function Splash(props) {

    useEffect(() => {
        setTimeout(() => {
            AsyncStorage.clear()
            AsyncStorage.getItem('id')
                .then((id) => {
                    console.log(id)
                    if (id != null) {
                        props.goMain(id)

                        props.navigation.replace('Main');

                    } else {
                        props.navigation.replace('Auth');
                        console.log(id);

                    }
                }
                );

        }, 3000);
    }, []);
    return (
        <ImageBackground source={require('../../assets/images/appstore.png')} resizeMode="contain" style={styles.image} />
    )
}



const styles = StyleSheet.create({
    image: {
        justifyContent: 'center',
        alignContent: 'center',
        width: "100%", height: "100%",
        backgroundColor: colors.nvpRoot,

    },
});

export default Splash;