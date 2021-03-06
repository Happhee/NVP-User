import { StyleSheet } from "react-native";
import colors from "../colors/color";
const settingStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        width: '100%',
        flexDirection: 'column',
    },
    header: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,
        paddingTop: 40,
        paddingBottom: 40,
        borderBottomColor: colors.settingUnderBar,
        borderBottomWidth: 2,

    },
    content: {
        alignItems: 'flex-start',
        borderBottomColor: colors.settingUnderBar,
        borderBottomWidth: 2,
        marginLeft: 10,
        marginRight: 10,
        paddingTop: 20,
        paddingBottom: 20,
        textAlign: 'center',
        justifyContent: 'center',
    },

    contentFont: {
        textAlignVertical: 'center',
        fontFamily: 'DoHyeon-Regular',
        fontSize: 29,
        marginLeft: 20,

    },
    settingView: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',

    },
    buttonView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,
        paddingTop: 20,
        paddingBottom: 20,
    },
    headerTitle: {
        marginBottom: 20,
        marginTop: 20,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    passwordView: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-start',

    }, headerView: {
        flex: 0.7,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',

    },

});

export default settingStyles;