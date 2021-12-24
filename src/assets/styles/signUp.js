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
        textDecorationLine: 'underline',
    },
    title: {
        flex: 0.5,
        alignItems: 'center',
    },
    titleFont: {
        color: colors.nvpRoot,
        fontFamily: 'DoHyeon-Regular',
        fontSize: 40,
    },
    content: {
        flex: 1.5,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    contentFont: {
        color: colors.nvpRoot,
        fontFamily: 'DoHyeon-Regular',
        fontSize: 25,
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
        marginRight: 3
    },

    footer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    pwView: {
        marginBottom: 5,
        width: '95%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    pwInfoView: {
        flexDirection: 'column',
        width: ' 100 %'

    },
    pwInfo: {
        justifyContent: 'flex-start',
        fontFamily: 'DoHyeon-Regular',
        fontSize: 15,
        color: colors.nvpUnder,
    },
    registerFont: {
        fontFamily: 'DoHyeon-Regular',
        fontSize: 30,
        color: colors.nvpRoot,
        textAlign: 'center',
        marginBottom: 20
    },
    registerInfo: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,


    }
});

export default authStyles;