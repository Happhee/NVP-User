import { REGISTER_ID_CARD, REGISTER_VACCINE_PASS, SET_PASSWORD, SIGN_UP, SIGN_UP_FAILURE, SIGN_UP_SUCCESS, VERIFICATION_SMS_MESSAGE } from "./actionTypes";
import axiosInstance from '../../lib/axiosInstance';

const USERS_URL = '/users';
//인증 성공
export function verifySmsMessage(id, name, phone) {
    return {
        type: VERIFICATION_SMS_MESSAGE,
        id: id,
        name: name,
        phone: phone
    }
}

export function setPassword(password) {

    return {
        type: SET_PASSWORD,
        password: password
    }
}

export function setVaccinePass(vaccinePassName, vaccinePassFilePath, fileName) {
    return {
        type: REGISTER_VACCINE_PASS,
        vaccinePassName: vaccinePassName,
        vaccinePassFilePath: vaccinePassFilePath,
        fileName: fileName
    }
}

export function setIdCard(idCardName, idCardFilePath) {
    return {
        type: REGISTER_ID_CARD,
        idCardName: idCardName,
        idCardFilePath: idCardFilePath
    }
}


export const signup = (dataToSubmit) => {
    return (dispatch) => {
        console.log('회원가입 요청');
        dispatch(signupRequest())
        axiosInstance.post(USERS_URL + '/signup', dataToSubmit)
            .then((res) => {
                const token = res.data;
                dispatch(signupSuccess(dataToSubmit, token));
            })
            .catch((err) => {
                dispatch(signupFailure(err.message))
            })
    }

}


export const signupRequest = (dataToSubmit) => {
    return {
        type: SIGN_UP
    }
}

export const signupSuccess = (dataToSubmit, token) => {
    return {
        type: SIGN_UP_SUCCESS,
        payload: token,
        data: dataToSubmit
    }
}

export const signupFailure = (err) => {
    return {
        type: SIGN_UP_FAILURE,
        payload: err
    }
}