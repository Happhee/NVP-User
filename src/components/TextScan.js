import React from 'react';
import { View } from 'react-native';

const TextScan = (props) => {
    const { takePicture, googleVisionDetention } = props;
    return (
        <View>
            {googleVisionDetention.webDetection.webEntities.map((data, index) => {
                return (
                    <View key={index}>
                        <Text>이름 : {data.name}</Text>
                    </View>
                )
            })}
        </View>
    )
}

export default TextScan;
