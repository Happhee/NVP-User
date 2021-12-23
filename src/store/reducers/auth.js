import * as types from '../actions/actionTypes';
import AsyncStorage from '@react-native-community/async-storage';


const initialState = {
    uniqueId: '',
    passWord: ''
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

        case types.LOGOUT:
            AsyncStorage.removeItem('userUniqueId');
            return initialState;
    }
    return state;
}