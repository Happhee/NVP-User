
import AsyncStorage from '@react-native-community/async-storage';
import { AUTO_LOGIN_SUCCESS, DELETE_USER, DELETE_USER_FAILURE, DELETE_USER_SUCCESS, LOGOUT } from '../actions/actionTypes';

const initialState = {
    id: '',
    filedate: '',
    filename: '',
    name: '',
    phone: '',
    loading: false,
}

export default function userReducer(state = initialState, action) {
    console.log('유저 리듀서');

    console.log(action);
    console.log(action.id);
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

        case LOGOUT:
            DELETE_USER_SUCCESS:
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