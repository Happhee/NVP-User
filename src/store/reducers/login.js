import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/actionTypes';
const initialState = {
    loading: false,
    uniqueId: '',
    data: ''
}
const loginReducer = (state = initialState, action) => {


    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                loading: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                uniqueId: action.uniqueId,
                data: action.payload,
            }
        case LOGIN_FAILURE:
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