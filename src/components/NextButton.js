import * as React from 'react';
import { Button } from 'react-native-paper';
import buttonStyles from '../assets/styles/buttonStyles';
const NextButton = (props) => (
    <Button
        style={buttonStyles.button}
        icon={props.icon}
        mode="contained"
        color="#00B990"
        onPress={props.onPress}>
        {props.buttonName}
    </Button>
)

export default NextButton;