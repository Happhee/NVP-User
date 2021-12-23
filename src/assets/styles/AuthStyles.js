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
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center'
    },
    footer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default authStyles;