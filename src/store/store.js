import { createStore, applyMiddleware } from "redux";
import rootReducers from "./reducers/rootReducers";
import thunk from 'redux-thunk'
import loggerMiddleware from "../lib/loggerMiddleware";

const store = createStore(rootReducers, applyMiddleware(loggerMiddleware));

export default store;
