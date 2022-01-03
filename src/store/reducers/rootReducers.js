import { combineReducers } from "redux";
import authReducer from "./auth";
import userReducer from "./user";
import loginReducer from "./login";
const rootReducers = combineReducers({
    // auth: authReducer,
    // user: userReducer,
    login: loginReducer
});

export default rootReducers;
