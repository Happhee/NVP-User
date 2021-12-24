import * as React from 'react';
import { Button, Text } from 'react-native-paper';
import buttonStyles from '../assets/styles/buttonStyles';
const SignUpButton = (props) => (
    <Button
        style={buttonStyles.signUpButton}
        icon={props.icon}
        mode="contained"
        color="#00B990"
        onPress={props.onPress}>
        <Text style={buttonStyles.buttonText}> {props.buttonName}</Text>
    </Button>
)

export default SignUpButton;