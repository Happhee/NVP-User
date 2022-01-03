import { combineReducers } from "redux";
import loginReducer from "./login";
import authReducer from "./auth";
import userReducer from "./user";
const rootReducers = combineReducers({
    login: loginReducer,
    auth: authReducer,
    user: userReducer,
});

export default rootReducers;
