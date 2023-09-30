import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import getLastNoteReducer from "./get-last-state-reducer";


let reducers = combineReducers({ getLastNoteReducer });

let store = createStore(reducers, applyMiddleware(thunk));

export default store;
