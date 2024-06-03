import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { ScreensReducer } from "./reducers/screens-reducer.js";
import { AirStateReducer } from "./reducers/air-data-reducer.js";
import { AirHistoryReducer } from "./reducers/air-history-reducer.js";

let reducers = combineReducers({ ScreensReducer, AirStateReducer, AirHistoryReducer });
let store = createStore(reducers, applyMiddleware(thunk));

export default store;
