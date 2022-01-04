import { EXPIRE_SMS_MESSAGE, MESSAGE_TIME_OUT, SMS_MESSAGE, SMS_MESSAGE_SUCCESS } from "../actions/actionTypes";

const initialState = {
    loading: false,
    message: '',
    phone: ''
}



function smsReducer(state = initialState, action) {


    switch (action.type) {

        case SMS_MESSAGE:
            return {
                ...state,
                loading: true,
            }

        case SMS_MESSAGE_SUCCESS:
            return {
                ...state,
                loading: false,
                phone: action.phone,
                message: action.payload,
            }
        case EXPIRE_SMS_MESSAGE:
            return {
                ...state,
                loading: false,
                message: MESSAGE_TIME_OUT,

            }
    }
    return state;
}

export default smsReducer;