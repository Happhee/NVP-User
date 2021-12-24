import { StyleSheet } from "react-native";
import colors from '../colors/color';

const buttonStyles = StyleSheet.create({
    button: {
        borderRadius: 10,
        backgroundColor: colors.nvpRoot,
        fontFamily: 'DoHyeon-Regular',
        fontSize: 21,
        marginBottom: 10,
        marginLeft: 4,
        marginRight: 4,

    },
    signUpButton: {
        borderRadius: 100,

    },
    buttonText: {
        fontFamily: 'DoHyeon-Regular',
        fontSize: 20,
        justifyContent: 'center',
        color: 'white'

    },
    nextButton: {
        borderRadius: 10,
    }

});

export default buttonStyles;