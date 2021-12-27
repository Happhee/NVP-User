import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from "../colors/color";
const rectangleStyles = StyleSheet.create({
    button: {
        alignItems: 'center',
        height: 70,
        justifyContent: 'center',
        width: 65,
    },
    buttonActionGroup: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    buttonBottomContainer: {
        alignItems: 'center',
        bottom: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        left: 25,
        position: 'absolute',
        right: 25,
        // backgroundColor: 'yellow',
    },
    buttonContainer: {
        alignItems: 'flex-end',
        bottom: 25,
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'absolute',
        right: 25,
        top: 25,
    },
    buttonGroup: {
        backgroundColor: '#00000080',
        borderRadius: 17,
    },
    buttonIcon: {
        color: 'white',
        fontSize: 22,
        marginBottom: 3,
        textAlign: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 13,
    },
    buttonTopContainer: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-between',
        left: 25,
        position: 'absolute',
        right: 25,
        top: 40,
    },
    cameraButton: {
        backgroundColor: 'white',
        borderRadius: 50,
        flex: 1,
        margin: 3,
    },
    cameraNotAvailableContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 15,
    },
    cameraNotAvailableText: {
        color: 'white',
        fontSize: 25,
        textAlign: 'center',
    },
    cameraOutline: {
        borderColor: 'white',
        borderRadius: 50,
        borderWidth: 3,
        height: 70,
        width: 70,
    },
    container: {
        backgroundColor: 'black',
        flex: 1,
    },
    flashControl: {
        alignItems: 'center',
        borderRadius: 30,
        height: 50,
        justifyContent: 'center',
        margin: 8,
        paddingTop: 7,
        width: 50,
    },
    loadingCameraMessage: {
        color: 'white',
        fontSize: 18,
        marginTop: 10,
        textAlign: 'center',
    },
    loadingContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    overlay: {
        bottom: 0,
        flex: 1,
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
    },
    processingContainer: {
        alignItems: 'center',
        backgroundColor: 'rgba(220, 220, 220, 0.7)',
        borderRadius: 16,
        height: 140,
        justifyContent: 'center',
        width: 200,
    },
    scanner: {
        flex: 1,
    },

    btnContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: hp(1.5),

        ...Platform.select({
            ios: {
                paddingBottom: hp(4.5),
            },
        }),
    },
    btnArea_l: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    btnArea_r: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        // marginRight: wp(10),
    },
    btn_l_text: {
        fontFamily: 'DoHyeon-Regular',
        color: 'white'

    },
    btn_r_text: {
        fontFamily: 'DoHyeon-Regular',
        color: 'white'
    },

    delbtnoutline: {
        margin: wp(6),
        marginRight: wp(2),
        width: wp(42),
        height: hp(5),
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.nvpUnder,
    },
    delbtn: {
        margin: wp(6),
        marginLeft: wp(2),
        width: wp(42),
        height: hp(5),
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.nvpRoot,
    },
    completebtn: {
        margin: wp(5),
        width: wp(15),
        height: hp(3.5),
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
});

export default rectangleStyles;