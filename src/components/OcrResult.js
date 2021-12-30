import React from 'react';
import ocrStyles from '../assets/styles/ocrStyles';
import { View, Text } from 'react-native'
import { getOcrName, getOcrDate, getOcrDose, getManufactuer, getRefImageName } from '../utils/googleVision';

function OcrResult(props) {
    return (
        <View style={ocrStyles.ocrContent}>
            <View style={ocrStyles.ocrResultTitleView}>
                <Text style={ocrStyles.ocrResultTitle}>OCR</Text>
                <Text style={ocrStyles.ocrResultTitle}>분석결과</Text>

            </View>
            <View style={ocrStyles.ocrContentView}>
                <Text style={ocrStyles.ocrTitle}>성명</Text>
                <Text style={ocrStyles.ocrText}>{getOcrName(props.description)}</Text>

                <Text style={ocrStyles.ocrTitle}>백신제조사</Text>
                <Text style={ocrStyles.ocrText}>{getManufactuer(props.description)}</Text>
            </View>
            <View style={ocrStyles.ocrContentView}>

                <Text style={ocrStyles.ocrTitle}>접종차수</Text>
                <Text style={ocrStyles.ocrText}>{getOcrDose(props.description)}</Text>
                <Text style={ocrStyles.ocrTitle}>접종일자</Text>
                <Text style={ocrStyles.ocrText}>{getOcrDate(props.description)}</Text>

            </View>
        </View>
    )
}

export default OcrResult;