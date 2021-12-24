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
        justifyContent: 'center',

    },
    headerFont: {
        color: colors.nvpRoot,
        fontFamily: 'DoHyeon-Regular',
        fontSize: 80,
        textDecorationLine: 'underline',
        textDecorationColor: colors.nvpUnder,
        borderBottomWidth: 5
    },
    title: {
        flex: 0.5,
        alignItems: 'center',
    },
    titleFont: {
        color: colors.nvpRoot,
        fontFamily: 'DoHyeon-Regular',
        fontSize: 35,

    },
    content: {
        flex: 2.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentFont: {
        color: colors.nvpRoot,
        fontFamily: 'DoHyeon-Regular',
        fontSize: 23,
    },
    contentButton: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '60%',
    },
    contentView: {
        backgroundColor: 'black',
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
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
    },
    footer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default authStyles;