import * as types from '../actions/actionTypes';
import AsyncStorage from '@react-native-community/async-storage';
import * as alert from '../../utils/alertConsts'
const padNumber = (num, length) => {
    return String(num).padStart(length, '0');
};
const initialState = {
    min: padNumber(3, 2);
    sec: padNumber(0, 2);
}

export default function timerReducer(state = initialState, action) {

    switch (action.type) {


    }
    return initialState;
}