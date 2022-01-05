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


});

export default settingStyles;