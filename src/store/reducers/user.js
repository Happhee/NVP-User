
import AsyncStorage from '@react-native-community/async-storage';
import { SET_PASSWORD, AUTO_LOGIN_SUCCESS, DELETE_USER, DELETE_USER_FAILURE, DELETE_USER_SUCCESS, LOGOUT, MODIFY_PASSWORD, MODIFY_PASSWORD_SUCCESS, MODIFY_PASSWORD_FAILURE } from '../actions/actionTypes';

const initialState = {
    id: '',
    filedate: '',
    filename: '',
    name: '',
    phone: '',
    password: '',
    loading: false,
}

export default function userReducer(state = initialState, action) {
    console.log('유저 리듀서');
    switch (action.type) {

        case AUTO_LOGIN_SUCCESS:
            console.log(action);
            return {
                ...state,
                id: action.id,
                filedate: action.payload.filedate,
                filename: action.payload.filename,
                name: action.payload.name,
                phone: action.payload.phone,
            }

        case SET_PASSWORD:
            return {
                ...state,
                password: action.password
            }

        case MODIFY_PASSWORD:
            return {
                ...state,
                loading: true,
            }

        case MODIFY_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
                password: action.password
            }

        case MODIFY_PASSWORD_FAILURE:
            return {
                ...state,
                loading: false,
            }

        case LOGOUT:
        case DELETE_USER_SUCCESS:
            console.log('로그아웃')

            console.log(action);

            AsyncStorage.clear();
            return initialState;

        case DELETE_USER:
            return {
                ...state,
                loading: true,
            }

        case DELETE_USER_FAILURE:
            return {
                ...state,
                loading: false
            }



        default:
            return { ...state }

    }
}