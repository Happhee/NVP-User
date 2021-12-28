import * as types from '../actions/actionTypes';
import AsyncStorage from '@react-native-community/async-storage';


const initialState = {
    uniqueId: '',
    passWord: '',
    name: '',
    phoneNumber: '',
    textMessage: '',
    idCardName: '',
    vaccinePassName: '',
    fileName: '',
    date: ''
}

export default function authReducer(state = initialState, action) {

    switch (action.type) {
        case types.LOGIN:
            AsyncStorage.setItem(
                'userUniqueId',
                JSON.stringify({
                    token: '',
                    uniqueId: action.uniqueId
                })
            );

            return {
                ...state,
                uniqueId: action.uniqueId
            }
        case types.AUTO_LOGIN:
            return {
                ...state,
                uniqueId: action.payload.userId
            }

        case types.LOGOUT:
            AsyncStorage.removeItem('userUniqueId');
            return initialState;


        case types.CHECK_PHONE_NUMBER:
            return action.payload;
    }
    return state;
}