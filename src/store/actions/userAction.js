import * as types from './actionTypes';
import AsyncStorage from '@react-native-community/async-storage';
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

export function logout() {
    AsyncStorage.removeItem('userUniqueId');
    return {
        type: types.LOGOUT
    }
}
