import * as types from './actionTypes';
import { request } from '../../utils/axios';

const INDIVIDUAL_URL = "/api/user";

export function login(dataToSubmit) {

    const data = request("GET", INDIVIDUAL_URL
        + "?uniqueID=" + dataToSubmit.uniqueId
        + "&simplePw=" + dataToSubmit.passWord);
    return {
        type: types.LOGIN,
        payload: data,
        uniqueId: dataToSubmit.uniqueId
    }

};

export function autoLogin(dataToSubmit) {
    const data = request("POST", INDIVIDUAL_URL, dataToSubmit);

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
