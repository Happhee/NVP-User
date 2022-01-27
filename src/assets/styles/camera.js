import { StyleSheet } from "react-native";
import colors from "../colors/color";
const cameraStyles = StyleSheet.create({

    cameraView: {
        flex: 5
    },
    cameraRoll: {
        flex: 1.5,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
});

export default cameraStyles;