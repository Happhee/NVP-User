import * as types from '../actions/actionTypes';
import AsyncStorage from '@react-native-community/async-storage';
import * as alert from '../../utils/alertConsts'

const initialState = {
    uniqueId: '',
    passWord: '',
    name: '',
    phoneNumber: '',
    message: '',
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


        case types.POST_MESSAGE:
            console.log(action.phoneNumber);
            return {
                ...state,
                phoneNumber: action.phoneNumber
            }

        case types.GET_MESSAGE:
            return {
                ...state,
                message: action.payload
            }


    }
    return state;
}