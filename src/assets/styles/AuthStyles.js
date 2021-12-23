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
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleFont: {
        color: colors.nvpRoot,
        fontFamily: 'DoHyeon-Regular',
        fontSize: 30,
    },
    content: {
        flex: 2.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentButton: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '60%',
    },
    contentInput: {
        backgroundColor: colors.nvpUnder,
        padding: 10,
        margin: 10,
        width: '60%',
        borderRadius: 10
    },
    insideContent: {
        margin: 10,

        backgroundColor: 'yellow'
    },
    footer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default authStyles;