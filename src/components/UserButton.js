import * as React from 'react';
import { Button } from 'react-native-paper';

const UserButton = (props) => (
    <Button
        icon={props.icon}
        mode="contained"
        color="#00B990"
        onPress={props.onPress}>
        {props.buttonName}
    </Button>
)

export default UserButton;