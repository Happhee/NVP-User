import * as types from './actionTypes';
import { request } from '../../utils/axios';

const USER_URL = "/api/user";
const CHECK_URL = "/check"

export function login(dataToSubmit) {

    const data = request("GET", USER_URL
        + "?uniqueID=" + dataToSubmit.uniqueId
        + "&simplePw=" + dataToSubmit.passWord);
    return {
        type: types.LOGIN,
        payload: data,
        uniqueId: dataToSubmit.uniqueId
    }

};

export function autoLogin(dataToSubmit) {
    const data = request("POST", USER_URL, dataToSubmit);

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

