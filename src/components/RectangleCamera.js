import React, { PureComponent } from 'react';
import Scanner, { Filters, RectangleOverlay, } from 'react-native-rectangle-scanner';
import { PropTypes } from 'prop-types';
import {
    ActivityIndicator,
    Animated,
    Dimensions,
    Platform,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';

import config from '../../config.json';
import TextScan from './TextScan';
import CameraRoll from '@react-native-community/cameraroll';

import { registerImage, getRefImageName } from '../utils/firebaseStorage';
import { callGoogleVisionApi, getIdOcrName } from '../utils/googleVision';
import ocrStyles from '../assets/styles/ocrStyles';
import AutoHeightImage from 'react-native-auto-height-image';
import rectangleStyles from '../assets/styles/rectangleCamera';
import storage from '@react-native-firebase/storage';

class RectangleCamera extends PureComponent {

    static propTypes = {
        cameraIsOn: PropTypes.bool,
        onLayout: PropTypes.func,
        onSkip: PropTypes.func,
        onCancel: PropTypes.func,
        onPictureTaken: PropTypes.func,
        onPictureProcessed: PropTypes.func,
        hideSkip: PropTypes.bool,
        initialFilterId: PropTypes.number,
        onFilterIdChange: PropTypes.func,
        googleVisionDetetion: PropTypes.bool
    }
    static defaultProps = {
        cameraIsOn: undefined,
        onLayout: () => { },
        onSkip: () => { },
        onCancel: () => { },
        onPictureTaken: () => { },
        onPictureProcessed: () => { },
        onFilterIdChange: () => { },
        hideSkip: false,
        initialFilterId: Filters.PLATFORM_DEFAULT_FILTER_ID,
        googleVisionDetetion: undefined
    }

    constructor(props) {
        super(props);
        this.state = {
            flashEnabled: false,
            showScannerView: false,
            didLoadInitialLayout: false,
            filterId: props.initialFilterId || Filters.PLATFORM_DEFAULT_FILTER_ID,
            detectedRectangle: false,
            isMultiTasking: false,
            loadingCamera: true,
            processingImage: false,
            takingPicture: false,
            feedbackState: false,
            overlayFlashOpacity: new Animated.Value(0),
            device: {
                initialized: false,
                hasCamera: false,
                permissionToUseCamera: false,
                flashIsAvailable: false,
                previewHeightPercent: 1,
                previewWidthPercent: 1,
            },
            idCard_sn: "",
            currentImage: '',
            preparedImgages: '',
            isScanned: false,
            s3Links: [],
            idCardName: ""
        };
        this.camera = React.createRef();
        this.imageProcessorTimeout = null;
    }

    componentDidMount() {

        if (this.state.didLoadInitialLayout && !this.state.isMultiTasking) {
            this.turnOnCamera();
        }

    }


    componentDidUpdate() {
        if (this.state.didLoadInitialLayout) {
            if (this.state.isMultiTasking) {
                return this.turnOffCamera(true);
            }
            if (this.state.device.initialized) {
                if (!this.state.device.hasCamera) {
                    return this.turnOffCamera();
                }
                if (!this.state.device.permissionToUseCamera) {
                    return this.turnOffCamera();
                }
            }

            if (this.props.cameraIsOn === true && !this.state.showScannerView) {
                return this.turnOnCamera();
            }

            if (this.props.cameraIsOn === false && this.state.showScannerView) {
                return this.turnOffCamera(true);
            }

            if (this.props.cameraIsOn === undefined) {
                return this.turnOnCamera();
            }
        }
        return null;
    }

    componentWillUnmount() {
        clearTimeout(this.imageProcessorTimeout);
    }

    //디바이스 설정 
    onDeviceSetup = (deviceDetatils) => {
        const { hasCamera, permissionToUseCamera, flashIsAvailable, previewHeightPercent, previewWidthPercent } = deviceDetatils;
        this.setState({
            loadingCamera: false,
            device: {
                initialized: true,
                hasCamera,
                permissionToUseCamera,
                flashIsAvailable,
                previewHeightPercent: previewHeightPercent || 1,
                previewWidthPercent: previewWidthPercent || 1,
            },
        });
    };

    //카메라 권한이 거부되었을때,
    getCameraDisabledMessage() {
        if (this.state.isMultiTasking) {
            return 'Camera is not allowed in multi tasking mode.';
        }

        const { device } = this.state;
        if (device.initialized) {
            if (!device.hasCamera) {
                return 'Could not find a camera on the device.';
            }
            if (!device.permissionToUseCamera) {
                return 'Permission to use camera has not been granted.';
            }
        }
        return 'Failed to set up the camera.';
    }


    getPreviewSize() {
        const dimensions = Dimensions.get('window');
        // We use set margin amounts because for some reasons the percentage values don't align the camera preview in the center correctly.
        const heightMargin =
            ((1 - this.state.device.previewHeightPercent) * dimensions.height) / 2;
        const widthMargin =
            ((1 - this.state.device.previewWidthPercent) * dimensions.width) / 2;
        if (dimensions.height > dimensions.width) {
            // Portrait
            return {
                height: this.state.device.previewHeightPercent,
                width: this.state.device.previewWidthPercent,
                marginTop: heightMargin,
                marginLeft: widthMargin,
            };
        }

        // Landscape
        return {
            width: this.state.device.previewHeightPercent,
            height: this.state.device.previewWidthPercent,
            marginTop: widthMargin,
            marginLeft: heightMargin,
        };
    }

    capture = () => {
        if (this.state.takingPicture) {
            return;
        }
        if (this.state.processingImage) {
            return;
        }
        this.setState({ takingPicture: true, processingImage: true });
        this.camera.current.capture();
        this.triggerSnapAnimation();

        this.imageProcessorTimeout = setTimeout(() => {
            if (this.state.takingPicture) {
                this.setState({ takingPicture: false });
            }
        }, 100);
    };

    //사진 가져오기
    onPictureTaken = (event) => {
        this.setState({ takingPicture: false });
        this.props.onPictureTaken(event);
    };

    //촬영된 이미지 실질적으로 가져오기
    onPictureProcessed = ({ croppedImage, initialImage }) => {
        console.log(croppedImage);

        this.setState({
            takingPicture: false,
            processingImage: false,
            showScannerView: this.props.cameraIsOn || false,
            feedbackState: true,
            currentImage: croppedImage,
        });
        let refImageName = getRefImageName(croppedImage);
        let reference = storage().ref(refImageName);
        let task = reference.putFile(croppedImage);
        console.log("success")

        task.then(() => {
            console.log("Upload");
            this.callGoogleVisionApi("gs://user-nvp.appspot.com/" + refImageName);

        }).catch((e) => {
            console.log(e)
            console.log("에러")
        });


        console.log('===croppedImage===');
    };

    triggerSnapAnimation() {
        Animated.sequence([
            Animated.timing(this.state.overlayFlashOpacity, {
                toValue: 0.2,
                duration: 100,
                useNativeDriver: true, // <-- Add this
            }),
            Animated.timing(this.state.overlayFlashOpacity, {
                toValue: 0,
                duration: 50,
                useNativeDriver: true, // <-- Add this
            }),
            Animated.timing(this.state.overlayFlashOpacity, {
                toValue: 0.6,
                delay: 100,
                duration: 120,
                useNativeDriver: true, // <-- Add this
            }),
            Animated.timing(this.state.overlayFlashOpacity, {
                toValue: 0,
                duration: 90,
                useNativeDriver: true, // <-- Add this
            }),
        ]).start();
    }

    //카메라 끄기
    turnOffCamera(shouldUninitializeCamera = false) {
        if (shouldUninitializeCamera && this.state.device.initialized) {
            this.setState(({ device }) => ({
                showScannerView: false,
                device: { ...device, initialized: false },
            }));
        } else if (this.state.showScannerView) {
            this.setState({ showScannerView: false });
        }
    }
    //카메라 켜기 
    turnOnCamera() {
        if (!this.state.showScannerView) {
            this.setState({
                showScannerView: true,
                loadingCamera: true,
            });
        }
    }

    renderCameraControls() {
        const dimensions = Dimensions.get('window');
        const aspectRatio = dimensions.height / dimensions.width;
        const isPhone = aspectRatio > 1.6;
        const cameraIsDisabled = this.state.takingPicture || this.state.processingImage;
        const disabledStyle = { opacity: cameraIsDisabled ? 0.8 : 1 };
        if (!isPhone) {
            if (dimensions.height < 500) {
                return (
                    <View style={rectangleStyles.buttonContainer}>
                        <View style={[rectangleStyles.cameraOutline, disabledStyle]}>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={rectangleStyles.cameraButton}
                                onPress={this.capture}
                            />
                        </View>
                    </View>
                );
            }
            return (
                <View style={rectangleStyles.buttonContainer}>
                    <View style={[rectangleStyles.cameraOutline, disabledStyle]}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={rectangleStyles.cameraButton}
                            onPress={this.capture}
                        />
                    </View>
                </View>
            );
        }

        return (
            <>
                <View style={rectangleStyles.buttonBottomContainer}>
                    <View style={{ flex: 1, backgroundColor: 'green' }} />

                    <View
                        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={[rectangleStyles.cameraOutline, disabledStyle]}>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={rectangleStyles.cameraButton}
                                onPress={this.capture}
                            />
                        </View>
                    </View>

                    <View
                        style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                        {this.state.isScanned && (
                            <TouchableOpacity
                                style={rectangleStyles.completebtn}
                                onPress={() => {
                                    {
                                        this.postImages();
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

    // Renders the camera controls or a loading/processing state
    renderCameraOverlay() {
        let loadingState = null;
        if (this.state.loadingCamera) {
            loadingState = (
                <View style={rectangleStyles.overlay}>
                    <View style={rectangleStyles.loadingContainer}>
                        <ActivityIndicator color="white" />
                        <Text style={rectangleStyles.loadingCameraMessage}>Loading Camera</Text>
                    </View>
                </View>
            );
        } else if (this.state.processingImage) {
            loadingState = (
                <View style={rectangleStyles.overlay}>
                    <View style={rectangleStyles.loadingContainer}>
                        <View style={rectangleStyles.processingContainer}>
                            <ActivityIndicator color="#333333" size="large" />
                            <Text style={{
                                fontFamily: 'DoHyeon-Regular',
                                color: '#333333', fontSize: 30, marginTop: 10
                            }}>
                                로딩중입니다
                            </Text>
                        </View>
                    </View>
                </View>
            );
        }

        return (
            <>
                {loadingState}
                <SafeAreaView style={[rectangleStyles.overlay]}>
                    {this.renderCameraControls()}
                </SafeAreaView>
            </>
        );
    }
    feedback = (option) => {
        if (option == 1) {
            //다시 찍기
            this.setState({
                feedbackState: false,
                googleVisionDetetion: false,
            });

        } else {
            const file = 'file://' + this.state.currentImage;
            //사용하기
            this.setState({
                feedbackState: false,
                preparedImgages: 'file://' + this.state.currentImage,
                isScanned: true,
            });
            this.props.setIdCard(this.state.idCardName, 'file://' + this.state.currentImage)

        }
    };

    callGoogleVisionApi = async (uri) => {
        console.log(uri);
        let googleVisionRes = await fetch(config.googleCloud.api + config.googleCloud.apiKey, {
            method: 'POST',
            body: JSON.stringify({
                "requests": [
                    {
                        "features": [
                            {
                                "type": "DOCUMENT_TEXT_DETECTION"
                            }
                        ],
                        "image": {
                            "source": {
                                "imageUri": uri
                            }
                        }
                    }
                ]
            })
        });

        await googleVisionRes.text()
            .then(googleVisionRes => {

                if (googleVisionRes) {

                    this.setState({
                        idCardName: getIdOcrName(JSON.parse(googleVisionRes).responses[0].fullTextAnnotation.text.split('\n'))
                    })
                }
            }).catch((err) => { console.log(err) })
    }


    feedbackOverlay() {
        if (this.state.feedbackState) {
            return (
                <>
                    <SafeAreaView style={[rectangleStyles.overlay, { backgroundColor: 'white' }]}>
                        <View
                            style={{
                                height: hp(10),
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                                paddingBottom: hp(3),
                            }}>
                            <Text style={rectangleStyles.idCardResult}>
                                신분증 촬영 결과
                            </Text>
                        </View>
                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>

                            <AutoHeightImage
                                source={{
                                    uri: this.state.currentImage,
                                }}
                                style={rectangleStyles.feedbackImg}
                                width={wp(90)}
                            />

                        </View>

                        <View style={rectangleStyles.ocrResultContainer}>
                            <View style={ocrStyles.ocrResultTitleView}>
                                <Text style={ocrStyles.ocrResultTitle}>OCR</Text>
                                <Text style={ocrStyles.ocrResultTitle}>분석결과</Text>
                            </View>
                            <View style={ocrStyles.ocrContentView}>
                                <Text style={ocrStyles.ocrTitle}>성명</Text>
                                <Text style={ocrStyles.ocrText}>{this.state.idCardName}</Text>
                            </View>

                        </View>

                        <View style={{
                            height: hp(20),
                            paddingBottom: hp(3),
                        }}>
                            <View style={rectangleStyles.btnContainer}>



                                <View style={rectangleStyles.btnArea_l}>
                                    <TouchableOpacity
                                        style={rectangleStyles.delbtnoutline}
                                        onPress={() => {
                                            {
                                                this.feedback(1);
                                            }
                                        }}>
                                        <Text style={rectangleStyles.btn_l_text}>다시찍기</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={rectangleStyles.btnArea_r}>
                                    <TouchableOpacity
                                        style={rectangleStyles.delbtn}
                                        onPress={() => {
                                            {
                                                this.feedback(2);
                                            }
                                        }}>
                                        <Text style={rectangleStyles.btn_r_text}>사용하기</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>

                        </View>
                    </SafeAreaView>
                </>
            );
        }
    }


    renderCameraView() {
        if (this.state.showScannerView) {
            const previewSize = this.getPreviewSize();
            let rectangleOverlay = null;
            if (!this.state.loadingCamera && !this.state.processingImage) {
                rectangleOverlay = (
                    <RectangleOverlay
                        detectedRectangle={this.state.detectedRectangle}
                        previewRatio={previewSize}
                        backgroundColor="rgba(105,144,247, 0.2)"
                        borderColor="rgb(105,144,247)"
                        borderWidth={4}
                    />
                );
            }
            // NOTE: I set the background color on here because for some reason the view doesn't line up correctly otherwise. It's a weird quirk I noticed.
            return (
                <View
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0)',
                        position: 'relative',
                        marginTop: previewSize.marginTop,
                        marginLeft: previewSize.marginLeft,
                        height: `${previewSize.height * 100}%`,
                        width: `${previewSize.width * 100}%`,
                    }}>
                    <Scanner
                        onPictureTaken={this.onPictureTaken}
                        onPictureProcessed={this.onPictureProcessed}
                        enableTorch={this.state.flashEnabled}
                        filterId={2}
                        ref={this.camera}
                        capturedQuality={0.6}
                        onRectangleDetected={({ detectedRectangle }) =>
                            this.setState({ detectedRectangle })
                        }
                        onDeviceSetup={this.onDeviceSetup}
                        // onTorchChanged={({enabled}) =>
                        //   this.setState({flashEnabled: enabled})
                        // }
                        style={rectangleStyles.scanner}
                    />
                    {rectangleOverlay}
                    <Animated.View
                        style={{
                            ...rectangleStyles.overlay,
                            backgroundColor: 'white',
                            opacity: this.state.overlayFlashOpacity,
                        }}
                    />
                    {this.renderCameraOverlay()}
                    {this.feedbackOverlay()}
                </View>
            );
        }

        let message = null;
        if (this.state.loadingCamera) {
            message = (
                <View style={rectangleStyles.overlay}>
                    <View style={rectangleStyles.loadingContainer}>
                        <ActivityIndicator color="white" />
                        <Text style={rectangleStyles.loadingCameraMessage}>Loading Camera</Text>
                    </View>
                </View>
            );
        } else {
            message = (
                <Text style={rectangleStyles.cameraNotAvailableText}>
                    {this.getCameraDisabledMessage()}
                </Text>
            );
        }

        return <View style={rectangleStyles.cameraNotAvailableContainer}>{message}</View>;
    }
    render() {
        console.log()

        return (
            <View
                style={rectangleStyles.container}
                onLayout={(event) => {
                    this.props.onLayout(event);
                    if (this.state.didLoadInitialLayout && Platform.OS === 'ios') {
                        const screenWidth = Dimensions.get('screen').width;
                        const isMultiTasking =
                            Math.round(event.nativeEvent.layout.width) <
                            Math.round(screenWidth);

                        console.log(Math.round(event.nativeEvent.layout.width));
                        console.log(Math.round(screenWidth))
                        if (isMultiTasking) {
                            this.setState({ isMultiTasking: true, loadingCamera: false });
                        } else {
                            this.setState({ isMultiTasking: false });
                        }
                    } else {
                        this.setState({ didLoadInitialLayout: true });
                    }
                }}>
                {this.renderCameraView()}
            </View>
        );
    }


}




export default RectangleCamera;