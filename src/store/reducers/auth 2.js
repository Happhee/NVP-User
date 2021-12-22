import * as types from '../actions/actionTypes';

const initialState = {
    uniqueId: '',
    passWord: ''
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_PASSWORD:
            return {
                ...state,
                uniqueId: action.uniqueId
            }
    }
    return state;
}