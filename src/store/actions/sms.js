import axiosInstance from '../../lib/axiosInstance';
import { EXPIRE_SMS_MESSAGE, SMS_MESSAGE, SMS_MESSAGE_FAILURE, SMS_MESSAGE_SUCCESS } from './actionTypes';

const SMS_URL = '/sms/check';

export const postMessage = (dataToSubmit) => {
    console.log('메세지보내기')
    console.log(dataToSubmit)
    return (dispatch) => {
        console.log('메세지 요청');
        dispatch(smsMessageRequest());
        axiosInstance.get(SMS_URL, { params: dataToSubmit })
            .then((res) => {
                console.log(res);
                dispatch(smsMessageSuccess(dataToSubmit.phone, res.data));
            })
            .catch((err) => {
                dispatch(smsMessageFailure(err));
            })
    }
}

export const smsMessageRequest = () => {
    return {
        type: SMS_MESSAGE
    };
}

export const smsMessageSuccess = (phone, message) => {
    return {
        type: SMS_MESSAGE_SUCCESS,
        phone: phone,
        payload: message
    };
}
export const smsMessageFailure = (err) => {
    return {
        type: SMS_MESSAGE_FAILURE,
        err: err
    };
}

export const expireSmsMessage = () => {
    return {
        type: EXPIRE_SMS_MESSAGE
    };
}