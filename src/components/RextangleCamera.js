import React, { PureComponent } from 'react';
import Scanner, { Filters, RectanglerOverlay } from 'react-native-rectangle-scanner';
import { PropTypes } from 'prop-types';
import React, { PureComponent } from 'react';
import Scanner, { Filiters, RectangleOverlay } from 'react-native-rectangle-scanner';
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

class RectangleCamera extends PureComponent {

    static PropTypes = {
        cameraIsOn: undefined,
        onCancel: () => { },
        onPictureTaken: () => { },
        onPictureProcessed: () => { },
        onFilterIdChange: () => { },
        hideSkip: false,
        initialFilterId: Filters.PLATFORM_DEFAULT_FILTER_ID,
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
            idCard_sn: this.props.route.params.currentBooksn,
            currentImage: '',
            preparedImgages: [],
            isScanned: false,
            s3Links: [],
        };
        this.camera = React.createRef();
        this.imageProcessorTimeout = null;
    }

    componentDidMount() {
        console.log('Mark param확인!!');
        console.log(this.state.book_sn);
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


}