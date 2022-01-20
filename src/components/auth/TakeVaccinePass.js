import React, { useEffect, useState, useCallback } from 'react';
import deviceInfoModule from 'react-native-device-info';
import { View, Text, TextInput, Keyboard, Image } from 'react-native';
import RegisterButton from '../RegisterButton';
import NvpButton from '../NvpButton';
import signUp from '../../assets/styles/signUp';
import ocrStyles from '../../assets/styles/ocrStyles';
import { TouchableWithoutFeedback } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

import storage from '@react-native-firebase/storage';
import config from '../../../config.json';
import { getRefImageName, getOcrName } from '../../utils/googleVision';
import OcrResult from '../OcrResult';
import { Alert } from 'react-native';

function TakeVaccinePass(props) {

    let [imageUri, setImageUri] = useState('');
    let [description, setDescription] = useState('');
    let [fileName, setFileName] = useState('');

    const openPicker = () => {
        launchImageLibrary({}, (response) => {

            setImageUri(response.assets[0].uri);

            let refImageName = getRefImageName(response.assets[0].uri);
            let reference = storage().ref(refImageName);
            let task = reference.putFile(response.assets[0].uri);
            console.log("success")

            task.then(() => {
                callGoogleVisionApi("gs://user-nvp.appspot.com/" + refImageName);
                setFileName(refImageName);


            }).catch((e) => {
                console.log(e);
            });

        })
    }

    const callGoogleVisionApi = async (uri) => {
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
                console.log(googleVisionRes);
                if (googleVisionRes) {
                    setDescription(JSON.parse(googleVisionRes).responses[0].fullTextAnnotation.text.split('\n'));
                    // setImageUri(uri)
                }
            }).catch((err) => { console.log(err) })
    }
    console.log(description)
    console.log(props.auth)

    return (

        <View style={signUp.container}>

            <View style={signUp.header}>
                <Text style={signUp.titleFont}>백신 증명서 등록</Text>
            </View>

            <View style={signUp.cameraRoll} >
                <RegisterButton buttonName="쿠브 인증서 가져오기"
                    onPress={openPicker} />
            </View>
            <View style={signUp.cameraView}>
                <Image
                    source={{ uri: imageUri }} style={{ width: '100%', height: '100%' }} />
            </View>
            <OcrResult description={description} />
            <View style={signUp.footer}>
                <NvpButton
                    icon="save"
                    onPress={function () {
                        Alert.alert("백신 증명서가 등록되었습니다")
                        console.log(fileName)
                        props.setVaccinePass(getOcrName(description), imageUri, fileName);
                        // const formData = new FormData();
                        // formData.append('image', imageUri);
                        // console.log('폼데이터');

                        // console.log(formData);
                        // props.uploadCertificate(formData);
                        props.navigation.navigate('CheckCertificate')
                    }} />
            </View>

        </View >

    )
}

export default TakeVaccinePass;