import * as types from './actionTypes';
import { request } from '../../utils/axios';

const USER_URL = "/api/user";

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

export function isPhoneNumber(phoneNumber) {
    const regex = new RegExp('^01([0|1|6|7|8|9])([0-9]{3,4})([0-9]{4})$');
    return {
        type: types.CHECK_PHONE_NUMBER,
        isCheck: regex.test(phoneNumber),
        phoneNumber: phoneNumber
    }
}
