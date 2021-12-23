import { StyleSheet } from "react-native";
import colors from '../colors/color';

const buttonStyles = StyleSheet.create({
    button: {
        borderRadius: 10,
        backgroundColor: colors.nvpRoot,
        fontFamily: 'DoHyeon-Regular',
        fontSize: 21,
        padding: 5
    },
    buttonFont: {
        fontFamily: 'DoHyeon-Regular',
        fontSize: 21,
        padding: 5
    }

});

export default buttonStyles;