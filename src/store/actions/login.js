import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from './actionTypes';
import axiosInstance from '../../lib/axiosInstance';

const USERS_URL = '/users';

export const login = (dataToSubmit) => {
    return (dispatch) => {
        console.log('로그인요청')
        dispatch(loginRequest(dataToSubmit))
        axiosInstance.post(USERS_URL + "/login", dataToSubmit)
            .then((res) => {
                const data = res.data
                dispatch(loginSuccess(dataToSubmit.id, data))
            })
            .catch(err => {
                dispatch(loginFailure(err))
            })
    }
}

export const loginRequest = (dataToSubmit) => {
    return {
        type: LOGIN
    }
}

export const loginSuccess = (id, data) => {
    console.log('로그인성공')

    return {
        type: LOGIN_SUCCESS,
        payload: data,
        uniqueId: id
    }
}

export const loginFailure = err => {
    console.log('로그인실패')

    return {
        type: LOGIN_FAILURE,
        payload: err
    }
}




