import { handleAction } from "redux-actions";
import * as api from '../../lib/api';

import createRequestThunk from "../../lib/createRequestThunk";
import * as types from '../actions/actionTypes';


const initialState = {

    user: null,
    uniqueId: '',
    passWord: '',
    name: '',
    phoneNumber: '',
    message: '',
    idCardName: '',
    idCardFilePath: '',
    vaccinePassName: '',
    vaccinePassFilePath: '',
    fileName: '',
    date: ''
}

const auth = handleAction(
    {

        [types.GET_LOGIN_SUCCESS]: (state, action) => ({
            ...state,
            user: action.payload
        }),


    },
    initialState
);

export default auth;