import * as React from 'react';
import { Button } from 'react-native-paper';
import buttonStyles from '../assets/styles/buttonStyles';
import Icon from 'react-native-vector-icons/FontAwesome'
const NextButton = (props) => (
    <Button
        style={buttonStyles.button}
        icon={props.icon}
        mode="contained"
        color="#00B990"
        onPress={props.onPress}>
        {props.buttonName}
        <Icon name="arrow-right" size={60} />
    </Button>
)

export default NextButton;