import * as React from 'react';
import {StatusBar, View, Button,TouchableOpacity, Text, StyleSheet } from 'react-native';

function MyCretificateScreen({ navigation }) 
{
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
           <TouchableOpacity style={styles.button}>
           <Text>NVP</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#00B990',
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        height: 200,
        marginBottom: 30,
        borderRadius: 100,
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(0,0,0,0.2)',
                shadowOpacity: 1,
                shadowOffset: {height: 2, width: 2},
                shadowRadius: 2,
            },
            android: {
                elevation: 0,
                marginHorizontal: 30,
            },
        })
    },

    text: {
        fontSize: 30,
        textAlign: 'center',
        color: 'white'
    }
});

  
export default MyCretificateScreen;