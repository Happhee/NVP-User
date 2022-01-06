import { CERTIFICATE_UPLOAD, CERTIFICATE_UPLOAD_FAILURE, CERTIFICATE_UPLOAD_SUCCESS, DOWNLOAD_CERTIFICATE, DOWNLOAD_CERTIFICATE_FAILURE, DOWNLOAD_CERTIFICATE_SUCCESS } from "../actions/actionTypes";


const initialState = {
    loading: false,
    vaccinePassFilePath: '',
    fileName: '',
}

function certificateReducer(state = initialState, action) {
    switch (action.type) {
        case CERTIFICATE_UPLOAD:
        case DOWNLOAD_CERTIFICATE:

            return {
                ...state,
                loading: true
            }
        case CERTIFICATE_UPLOAD_SUCCESS:
            return {
                ...state,
                vaccinePassFilePath: action.vaccinePassFilePath,
                fileName: action.fileName,
                loading: false,
            }

        case DOWNLOAD_CERTIFICATE_SUCCESS:
            return {
                ...state
            }

        case CERTIFICATE_UPLOAD_FAILURE:
        case DOWNLOAD_CERTIFICATE_FAILURE:
            return {
                ...state,
                loading: false
            }

        default:
            return state;
    }
}

export default certificateReducer