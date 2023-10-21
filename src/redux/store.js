import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import ScreensTabsReducer from "./screens-tabs-reducer.js";

let reducers = combineReducers({ ScreensTabsReducer });
let store = createStore(reducers, applyMiddleware(thunk));

export default store;
