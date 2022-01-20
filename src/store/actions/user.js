import { DELETE_USER, DELETE_USER_FAILURE, DELETE_USER_SUCCESS, LOGOUT, MODIFY_PASSWORD, MODIFY_PASSWORD_FAILURE, MODIFY_PASSWORD_SUCCESS } from "./actionTypes";
import axiosInstance from "../../lib/axiosInstance";

const USERS_URL = '/users';

export function logout() {
    return {
        type: LOGOUT
    }
}
export const modifyPassword = (dataToSubmit) => {
    return (dispatch) => {
        console.log('비밀번호 변경');
        dispatch(modifyPasswordRequest())
        axiosInstance.patch(USERS_URL + '/profile', dataToSubmit)
            .then((res) => {
                console.log(res);
                dispatch(modifyPasswordSuccess(dataToSubmit.password))
            })
            .catch((err) => {
                dispatch(modifyPasswordFailure())
            })
    }
}
export const modifyPasswordRequest = () => {
    return {
        type: MODIFY_PASSWORD
    }
}

export const modifyPasswordSuccess = (password) => {
    return {
        type: MODIFY_PASSWORD_SUCCESS,
        password: password,
    }
}

export const modifyPasswordFailure = (err) => {
    return {
        type: MODIFY_PASSWORD_FAILURE
    }
}
export const deleteUser = (dataToSubmit) => {
    return (dispatch) => {
        console.log('회원삭제');
        dispatch(deleteUserRequest())
        axiosInstance.delete(USERS_URL, dataToSubmit)
            .then((res) => {
                dispatch(deleteUserSuccess())
            })
            .catch((err) => {
                dispatch(deleteUserFailure(err))
            })
    }
}

export const deleteUserRequest = () => {
    return {
        type: DELETE_USER
    }
}

export const deleteUserSuccess = () => {
    return {
        type: DELETE_USER_SUCCESS
    }
}

export const deleteUserFailure = (err) => {
    return {
        type: DELETE_USER_FAILURE
    }
}
