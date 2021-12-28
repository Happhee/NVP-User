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

export function postMessage(phoneNumber) {
    const data = request("POST", CHECK_URL + '/smsSend', phoneNumber);

    return {
        type: types.POST_MESSAGE,
        payload: data,
        phoneNumber: phoneNumber
    }
}

export function getMessage(phoneNumber) {
    const data = request("GET", CHECK_URL
        + "?phoneNumber=" + phoneNumber);

    return {
        type: types.GET_MESSAGE,
        payload: data
    }
}


