import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import ScreensReducer from "./screens-reducer.js";

let reducers = combineReducers({ ScreensReducer });
let store = createStore(reducers, applyMiddleware(thunk));

export default store;
