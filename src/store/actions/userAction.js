import * as types from './actionTypes';
import { request } from '../../utils/axios';

const INDIVIDUAL_URL = "/api/user";

export function loginPassword(dataToSubmit) {

    const data = request("GET", INDIVIDUAL_URL
        + "?uniqueID=" + dataToSubmit.uniqueId
        + "&simplePw=" + dataToSubmit.passWord);
    return {
        type: types.LOGIN_PASSWORD,
        payload: data,
        uniqueId: dataToSubmit.uniqueId
    }

};
