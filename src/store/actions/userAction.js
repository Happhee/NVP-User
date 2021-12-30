import * as types from './actionTypes';
import { request } from '../../utils/axios';

const USERS_URL = "/api/users";

export function login(dataToSubmit) {

    const data = request("GET", USERS_URL
        + "?uniqueID=" + dataToSubmit.uniqueId
        + "&simplePw=" + dataToSubmit.passWord);
    return {
        type: types.LOGIN,
        payload: data,
        uniqueId: dataToSubmit.uniqueId
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

export function resetPassword(dataToSubmit) {
    const data = request()
}
