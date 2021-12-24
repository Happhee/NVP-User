import { StyleSheet } from "react-native";
import colors from "../colors/color";
const authStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        width: '100%',
    },
    header: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'

    },
    headerFont: {
        color: colors.nvpRoot,
        fontFamily: 'DoHyeon-Regular',
        fontSize: 80,
        textDecorationLine: 'underline'
    },
    title: {
        flex: 0.5,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleFont: {
        color: colors.nvpRoot,
        fontFamily: 'DoHyeon-Regular',
        fontSize: 30,
    },
    content: {
        backgroundColor: 'pink',

        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentFont: {
        color: colors.nvpRoot,
        fontFamily: 'DoHyeon-Regular',
        fontSize: 23,
        width: '25%',
        padding: 5,
    },

    contentView: {
        marginBottom: 5,
        width: '95%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    contentInput: {
        backgroundColor: colors.signUpInput,
        fontSize: 23,
        fontFamily: 'DoHyeon-Regular',
        color: colors.nvpRoot,
        width: '55%',
        borderRadius: 10,
        padding: 5,
    },

    footer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default authStyles;