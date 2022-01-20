import * as React from 'react';
import { Button, Text } from 'react-native-paper';
import buttonStyles from '../assets/styles/button';
const UserButton = (props) => (
    <Button
        style={buttonStyles.button}
        icon={props.icon}
        mode="contained"
        color="#00B990"
        onPress={props.onPress}>
        <Text style={buttonStyles.buttonText}> {props.buttonName}</Text>
    </Button>
)

export default UserButton;