import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, AUTO_LOGIN, AUTO_LOGIN_SUCCESS, AUTO_LOGIN_FAILURE } from '../actions/actionTypes';
import AsyncStorage from '@react-native-community/async-storage';
import { Alert } from 'react-native';

const initialState = {
    loading: false,
    id: '',
    data: ''
}
const loginReducer = (state = initialState, action) => {

    switch (action.type) {
        case LOGIN, AUTO_LOGIN:
            console.log('로그인 또는 자동로그인')
            return {
                ...state,
                loading: true
            }

        case LOGIN_SUCCESS:
            console.log('로그인성공')
            console.log(action.payload);

            console.log(action.payload.accessToken);
            console.log(action.id);
            AsyncStorage.multiSet([
                ['accessToken', action.payload.accessToken],
                ['refreshToken', action.payload.refreshToken],
                ['id', action.id]
            ]);

            return {
                ...state,
                loading: false,
                id: action.id,
                data: action.payload,
            }
        case LOGIN_FAILURE:
            AUTO_LOGIN_FAILURE:
            Alert.alert('로그인에 실패하였습니다');
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