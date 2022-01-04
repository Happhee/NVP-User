import { combineReducers } from "redux";
import loginReducer from "./login";
import authReducer from "./auth";
import userReducer from "./user";
import smsReducer from "./sms";
const rootReducers = combineReducers({
    login: loginReducer,
    auth: authReducer,
    user: userReducer,
    sms: smsReducer
});

export default rootReducers;
