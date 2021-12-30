import * as React from 'react';
import { Button, Text } from 'react-native-paper';
import buttonStyles from '../assets/styles/button';
const RegisterButton = (props) => (
    <Button
        style={buttonStyles.registerButton}
        icon={props.icon}
        mode="contained"
        color="#00B990"
        onPress={props.onPress}>
        <Text style={buttonStyles.registerButtonText}> {props.buttonName}</Text>
    </Button>
)

export default RegisterButton;