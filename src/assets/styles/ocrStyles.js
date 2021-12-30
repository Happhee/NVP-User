import { StyleSheet } from "react-native";
import colors from "../colors/color";
const ocrStyles = StyleSheet.create({
    cameraView: {
        flex: 5,
        flexDirection: 'column',
    },
    ocrContent: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    ocrContentView: {
        flexDirection: 'column',
        marginRight: 20,
        marginLeft: 20,
    },
    ocrResultTitle: {
        fontFamily: 'DoHyeon-Regular',
        fontSize: 28,
        color: colors.nvpRoot,
        textAlign: 'center',
        marginBottom: 10

    },
    ocrResultTitleView: {
        justifyContent: 'center',
        paddingRight: 20,
        borderRightWidth: 4,
        borderRightColor: colors.signUpInput
    },
    ocrText: {
        fontFamily: 'DoHyeon-Regular',
        fontSize: 20,
        color: colors.nvpUnder,
        // textAlign: 'center',
        marginBottom: 10

    },
    ocrTitle: {
        fontFamily: 'DoHyeon-Regular',
        fontSize: 20,
        color: colors.nvpRoot,

    },
})

export default ocrStyles;