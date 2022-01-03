import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/actionTypes';
const initialState = {
    loading: false,
    uniqueId: '',
    data: ''
}
const loginReducer = (state = initialState, action) => {


    switch (action.type) {
        case LOGIN:
            console.log('로그인시작');

            return {
                ...state,
                loading: true
            }
        case LOGIN_SUCCESS:
            console.log('로그인성공 리듀서');
            console.log(action.uniqueId)

            return {
                ...state,
                loading: false,
                uniqueId: action.uniqueId,
                data: action.payload,
            }
        case LOGIN_FAILURE:
            return {
                loading: false,
                data: action.payload
            }
        default:
            return state
    }
}

export default loginReducer;