
import AsyncStorage from '@react-native-community/async-storage';
import { Alert } from 'react-native';
import { SET_PASSWORD, AUTO_LOGIN_SUCCESS, DELETE_USER, DELETE_USER_FAILURE, DELETE_USER_SUCCESS, LOGOUT, MODIFY_PASSWORD, MODIFY_PASSWORD_SUCCESS, MODIFY_PASSWORD_FAILURE, POST_VISIT_DATA, POST_VISIT_DATA_SUCCESS, POST_VISIT_DATA_FAILURE } from '../actions/actionTypes';

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
        case POST_VISIT_DATA:
        case DELETE_USER:
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
        case POST_VISIT_DATA_FAILURE:
        case DELETE_USER_FAILURE:
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

        case POST_VISIT_DATA_SUCCESS:
            Alert.alert('방문기록이 저장되었습니다')
            return {
                ...state,
                loading: false
            }



        default:
            return { ...state }

    }
}