import React from 'react';
import { View, TouchableOpacity } from "react-native"
import rectangleStyles from "../../assets/styles/rectangleCamera";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
function LowDimensionScreen(props) {
    return (

        <View style={rectangleStyles.buttonContainer}>
            <View style={[rectangleStyles.cameraOutline, disabledStyle]}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={rectangleStyles.cameraButton}
                    onPress={props.onPress}
                />
            </View>
        </View>
    );
}

function HighDimensionScreen(props) {
    return (
        <View style={rectangleStyles.buttonContainer}>
            <View style={[rectangleStyles.cameraOutline, disabledStyle]}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={rectangleStyles.cameraButton}
                    onPress={props.onPress}
                />
            </View>
        </View>
    );
}

function PhoneDimesionScreen(props) {
    return (
        <>
            <View style={rectangleStyles.buttonBottomContainer}>
                <View style={{ flex: 1, backgroundColor: 'green' }} />

                <View
                    style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={[rectangleStyles.cameraOutline, rectangleStyles.disabledStyle]}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={rectangleStyles.cameraButton}
                            onPress={props.onPress}
                        />
                    </View>
                </View>

                <View
                    style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                    {props.isScanned && (
                        <TouchableOpacity
                            style={rectangleStyles.completebtn}
                            onPress={() => {
                                {
                                    props.postImages();
                                }
                            }}>
                            <Text style={{ color: 'black', fontSize: wp(4.5) }}>완료</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        </>
    );
}

export { LowDimensionScreen, HighDimensionScreen, PhoneDimesionScreen }