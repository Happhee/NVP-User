import AsyncStorage from '@react-native-community/async-storage';
import { LOGOUT, VERIFICATION_SMS_MESSAGE } from '../actions/actionTypes';

const USERS_URL = "/users";


const initialState = {
    id: '',
    password: '',
    name: '',
    phone: '',
    idCardName: '',
    idCardFilePath: '',
    vaccinePassName: '',
    vaccinePassFilePath: '',
    fileName: '',
    date: ''
}

function authReducer(state = initialState, action) {


    switch (action.type) {

        case LOGOUT:
            AsyncStorage.removeItem('userUniqueId');
            return initialState;



        case VERIFICATION_SMS_MESSAGE:
            return {
                ...state,
                id: action.id,
                name: action.name,
                phone: action.phone
            }

        case types.SET_PASSWORD:
            return {
                ...state,
                password: action.passWord
            }

        case types.REGISTER_VACCINE_PASS:
            return {
                ...state,
                vaccinePassName: action.vaccinePassName,
                vaccinePassFilePath: action.vaccinePassFilePath,
                fileName: action.fileName
            }

        case types.REGISTER_ID_CARD:
            return {
                ...state,
                idCardName: action.idCardName,
                idCardFilePath: action.idCardFilePath
            }

        case types.SIGN_UP:
            AsyncStorage.multiSet([
                ['accessToken', action.payload.token],
                ['uniqueId', action.data.id]
            ])
            return {
                ...state,
                id: action.data.id,
                password: action.data.password,
                name: action.data.name,
                phone: action.data.phone,
                vaccinePassFilePath: action.data.fileName,
                date: action.data.filedate
            }



    }
    return state;
}

export default authReducer;