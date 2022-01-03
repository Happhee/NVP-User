import * as types from '../actions/actionTypes';
import AsyncStorage from '@react-native-community/async-storage';
import * as alert from '../../utils/alertConsts'
import axiosInstance from '../../lib/axiosInstance';
const USERS_URL = "/users";
import { request } from '../../utils/axios';

const initialState = {
    uniqueId: '',
    passWord: '',
    name: '',
    phoneNumber: '',
    message: '',
    idCardName: '',
    idCardFilePath: '',
    vaccinePassName: '',
    vaccinePassFilePath: '',
    fileName: '',
    date: ''
}

function authReducer(state = initialState, action) {


    switch (action.type) {
        case types.LOGIN:
            applyLogin(state, action.dataToSubmit);
            break;

        case types.AUTO_LOGIN:
            return {
                ...state,
                uniqueId: action.payload.userId
            }

        case types.LOGOUT:
            AsyncStorage.removeItem('userUniqueId');
            return initialState;


        case types.POST_MESSAGE:
            return {
                ...state,
                phoneNumber: action.phoneNumber
            }

        case types.GET_MESSAGE:
            return {
                ...state,
                message: "123456"
            }

        case types.EXPIRE_MESSAGE:
            console.log("시간 만료");
            return {
                ...state,
                message: alert.MESSAGE_TIME_EXPIRATION
            }


        case types.SUCCESS_MESSAGE:
            return {
                ...state,
                uniqueId: action.uniqueId,
                name: action.name,
                phoneNumber: action.phoneNumber
            }

        case types.SET_PASSWORD:
            return {
                ...state,
                passWord: action.passWord
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
                uniqueId: action.data.id,
                passWord: action.data.password,
                name: action.data.name,
                phoneNumber: action.data.phone,
                vaccinePassFilePath: action.data.fileName,
                date: action.data.filedate
            }



    }
    return state;
}


const applyLogin = async (state: any, dataToSubmit) => {

    console.log(state);
    const res = await request("POST", USERS_URL + "/login", dataToSubmit)

    AsyncStorage.multiSet([
        ['accessToken', res.data.accessToken],
        ['uniqueId', dataToSubmit.id]
    ])

    return {
        ...state,
        uniqueId: dataToSubmit.id
    }

}

export default authReducer;