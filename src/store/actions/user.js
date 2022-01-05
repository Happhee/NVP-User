import { DELETE_USER, DELETE_USER_FAILURE, DELETE_USER_SUCCESS, LOGOUT } from "./actionTypes";
import axiosInstance from "../../lib/axiosInstance";

const USERS_URL = '/users';

export function logout() {
    return {
        type: LOGOUT
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
