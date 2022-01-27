import React from 'react';
import ocrStyles from '../assets/styles/ocrStyles';
import { View, Text } from 'react-native'
import { getOcrName, getOcrDate, getOcrDose, getManufactuer, getRefImageName } from '../utils/googleVision';

function OcrResult(props) {
    return (
        <View style={ocrStyles.ocrContent}>
            <View style={ocrStyles.ocrResultTitleView}>
                <Text style={ocrStyles.ocrResultTitle}>OCR</Text>
                <Text style={ocrStyles.ocrResultTitle}>Result</Text>

            </View>
            <View style={ocrStyles.ocrContentView}>
                <Text style={ocrStyles.ocrTitle}>Name</Text>
                <Text style={ocrStyles.ocrText}>{getOcrName(props.description)}</Text>

                <Text style={ocrStyles.ocrTitle}>Manufacturer</Text>
                <Text style={ocrStyles.ocrText}>{getManufactuer(props.description)}</Text>
            </View>
            <View style={ocrStyles.ocrContentView}>

                <Text style={ocrStyles.ocrTitle}>Order</Text>
                <Text style={ocrStyles.ocrText}>{getOcrDose(props.description)}</Text>
                <Text style={ocrStyles.ocrTitle}>Date</Text>
                <Text style={ocrStyles.ocrText}>{getOcrDate(props.description)}</Text>

            </View>
        </View>
    )
}

export default OcrResult;