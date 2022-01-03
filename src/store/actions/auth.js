import * as types from './actionTypes';

const USERS_URL = "/users";

export function login(dataToSubmit) {
    return {
        type: types.LOGIN,
        dataToSubmit
    }
}