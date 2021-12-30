import React, { useEffect, useState, useCallback } from 'react';
import deviceInfoModule from 'react-native-device-info';
import { View, Text, TextInput, Keyboard, Image } from 'react-native';
import RegisterButton from '../RegisterButton';
import NextButton from '../NextButton';
import signUp from '../../assets/styles/signUp';
import { TouchableWithoutFeedback } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

import storage from '@react-native-firebase/storage';
import config from '../../../config.json';

function TakeVaccinePass(props) {

    let [imageUri, setImageUri] = useState('');
    let [description, setDescription] = useState('');
    const openPicker = () => {
        launchImageLibrary({}, (response) => {

            setImageUri(response.assets[0].uri);

            let refImageName = getRefImageName(response.assets[0].uri);
            let reference = storage().ref(refImageName);
            let task = reference.putFile(response.assets[0].uri);
            console.log("success")

            task.then(() => {
                callGoogleVisionApi("gs://user-nvp.appspot.com/" + refImageName);

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
                }
            }).catch((err) => { console.log(err) })
    }
    console.log(description)

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
            <View style={signUp.footer}>
                <Text>{description}</Text>
                <NextButton
                    onPress={function () {
                        props.navigation.navigate('CheckCertificate')
                    }} />
            </View>

        </View >

    )
}

export default TakeVaccinePass;