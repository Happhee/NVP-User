import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from './actionTypes';
import { AUTO_LOGIN, AUTO_LOGIN_SUCCESS, AUTO_LOGIN_FAILURE } from './actionTypes';
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


    return {
        type: LOGIN_SUCCESS,
        payload: data,
        id: id
    }
}

export const loginFailure = err => {
    console.log('로그인실패')

    return {
        type: LOGIN_FAILURE,
        payload: err
    }
}


export const autoLogin = (dataToSubmit) => {
    return (dispatch) => {
        console.log('자동로그인요청')
        console.log(dataToSubmit);
        dispatch(autoLoginRequest())

        axiosInstance.get(USERS_URL + "/profile", dataToSubmit)
            .then((res) => {
                const data = res.data
                console.log('자동로그인성공')

                console.log(res);
                dispatch(autoLoginSuccess(dataToSubmit.id, data))
            })
            .catch(err => {
                dispatch(autoLoginFailure(err))
            })
    }
}

export const autoLoginRequest = () => {
    return {
        type: AUTO_LOGIN
    }
}

export const autoLoginSuccess = (data) => {
    return {
        type: AUTO_LOGIN_SUCCESS,
        payload: data
    }
}

export const autoLoginFailure = (err) => {
    return {
        type: AUTO_LOGIN_FAILURE,
        data: err,
    }
}


