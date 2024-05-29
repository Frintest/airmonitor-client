import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import ScreensReducer from "./screens-reducer.js";
import AirStateReducer from "./air-state-reducer.js";
import AirHistoryReducer from "./air-history-reducer.js";

let reducers = combineReducers({ ScreensReducer, AirStateReducer, AirHistoryReducer });
let store = createStore(reducers, applyMiddleware(thunk));

export default store;
