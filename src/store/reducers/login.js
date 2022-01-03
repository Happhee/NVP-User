import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, AUTO_LOGIN, AUTO_LOGIN_SUCCESS, AUTO_LOGIN_FAILURE } from '../actions/actionTypes';
import AsyncStorage from '@react-native-community/async-storage';

const initialState = {
    loading: false,
    id: '',
    data: ''
}
const loginReducer = (state = initialState, action) => {

    console.log(action.type);

    switch (action.type) {
        case LOGIN, AUTO_LOGIN:
            console.log('로그인 또는 자동로그인')
            return {
                ...state,
                loading: true
            }

        case LOGIN_SUCCESS:
            AUTO_LOGIN_SUCCESS:
            console.log('로그인성공')
            console.log(action.payload);
            console.log(action.id);
            AsyncStorage.multiSet([
                ['accessToken', action.payload.accessToken],
                ['refreshToken', action.payload.refreshToken],
                ['id', action.id]
            ]);


            console.log('로그인성공')
            return {
                ...state,
                loading: false,
                id: action.id,
                data: action.payload,
            }
        case LOGIN_FAILURE, AUTO_LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                data: action.payload
            }






        default:
            return state;
    }
}

export default loginReducer;