import React from 'react';
import { View, TouchableOpacity, ActivityIndicator, SafeAreaView } from "react-native"
import rectangleStyles from "../../assets/styles/rectangleCamera";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

function LoadingCameraScreen() {
    return (
        <View style={rectangleStyles.overlay}>
            <View style={rectangleStyles.loadingContainer}>
                <ActivityIndicator color="white" />
                <Text style={rectangleStyles.loadingCameraMessage}>카메라 키는중</Text>
            </View>
        </View>
    )
}

function ScanningScreen() {
    return (
        <View style={rectangleStyles.overlay}>
            <View style={rectangleStyles.loadingContainer}>
                <View style={rectangleStyles.processingContainer}>
                    <ActivityIndicator color="#333333" size="large" />
                    <Text style={{ color: '#333333', fontSize: 30, marginTop: 10 }}>
                        스캔 중
                    </Text>
                </View>
            </View>
        </View>
    )
}

function CameraOverlayScreen(props) {
    let loadingState = null;
    if (props.loadingCamera) {
        loadingState = (
            <LoadingCameraScreen />
        );
    } else if (props.processingImage) {
        loadingState = (
            <ScanningScreen />
        );
    }
    return (
        <>
            {loadingState}
            <SafeAreaView style={[rectangleStyles.overlay]}>
                {props.renderCameraControls()}
            </SafeAreaView>
        </>
    )
}

export { LoadingCameraScreen, ScanningScreen, CameraOverlayScreen };