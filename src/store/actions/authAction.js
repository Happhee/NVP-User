import * as types from './actionTypes';
import { request } from '../../utils/axios';
import axiosInstance from '../../utils/axiosInstance';

const USERS_URL = "/users";
const CHECK_URL = "/check"

export function getLogin(dataToSubmit) {
    return {
        type: types.LOGIN,
        dataToSubmit,
    }
}
export function login(dataToSubmit) {
    // const data = await axiosInstance.post(USERS_URL + "/login", dataToSubmit);
    const data = request("POST", USERS_URL + "/login", dataToSubmit);

    // data: {
    //     accessToken,
    //     refreshToken,
    //   }
    return {
        type: types.LOGIN,
        payload: data,
        uniqueId: dataToSubmit.id
    }

};

export function autoLogin(dataToSubmit) {
    const data = request("POST", USERS_URL, dataToSubmit);

    return {
        type: types.AUTO_LOGIN,
        payload: data,
    }
}

export function logout() {
    return {
        type: types.LOGOUT
    }
}

//문자인증 보내기
export function postMessage(phoneNumber) {
    const data = request("POST", CHECK_URL + '/smsSend', phoneNumber);

    return {
        type: types.POST_MESSAGE,
        payload: data,
        phoneNumber: phoneNumber
    }
}
//문자 인증 가져오기
export function getMessage(phoneNumber) {
    const data = request("GET", CHECK_URL
        + "?phoneNumber=" + phoneNumber);

    return {
        type: types.GET_MESSAGE,
        payload: data
    }
}
//인증 시간 만료
export function initMessage() {
    return {
        type: types.EXPIRE_MESSAGE
    }
}
//인증 성공
export function successMessage(uniqueId, name, phoneNumber) {
    return {
        type: types.SUCCESS_MESSAGE,
        uniqueId: uniqueId,
        name: name,
        phoneNumber: phoneNumber
    }
}

export function setPassword(passWord) {

    return {
        type: types.SET_PASSWORD,
        passWord: passWord
    }
}

export function setVaccinePass(vaccinePassName, vaccinePassFilePath, fileName) {
    return {
        type: types.REGISTER_VACCINE_PASS,
        vaccinePassName: vaccinePassName,
        vaccinePassFilePath: vaccinePassFilePath,
        fileName: fileName
    }
}

export function setIdCard(idCardName, idCardFilePath) {
    return {
        type: types.REGISTER_ID_CARD,
        idCardName: idCardName,
        idCardFilePath: idCardFilePath
    }
}


export function signup(dataToSubmit) {
    const data = request("POST", USERS_URL + '/signup', dataToSubmit);

    return {
        type: types.SIGN_UP,
        payload: data,
        data: dataToSubmit
    }
}
