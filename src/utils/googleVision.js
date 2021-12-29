import config from '../../config.json';

export const callGoogleVisionApi = async (uri) => {
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
            console.log(googleVisionRes.responses);
            const json1 = JSON.parse(googleVisionRes).responses

            // json1 = JSON.parse(json1).textAnnotations
            // json1 = JSON.parse(json1).description

            console.log(json1.fullTextAnnotation);
            if (googleVisionRes) {

            }
        }).catch((err) => { console.log(err) })
}
