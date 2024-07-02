import { API } from "../../api/api.js";

const UPDATE_HISTORY = "history/UPDATE_HISTORY";
const UPDATE_INFO = "history/UPDATE_INFO";

const initialState = {
	history: {},
};

export const AirHistoryReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_HISTORY: {
			return {
				...state,
				history: {
					...state.history,
					[action.name]: {
						...state.history[action.name],
						history: [...action.history]
					}
				}
			};
		}

		case UPDATE_INFO: {
			return {
				...state,
				history: {
					...state.history,
					[action.name]: {
						...state.history[action.name],
						info: { ...action.info }
					}
				}
			}
		}

		default:
			return state;
	}
};

const updateHistory = (history, name) => ({ type: UPDATE_HISTORY, name, history });
const updateInfo = (info, name) => ({ type: UPDATE_INFO, name, info });

export const updateAirHistoryThunk = (name) => (dispatch) => {
	API.sendHistoryItemName(name);

	API.updateAirHistory((data) => {
		dispatch(updateHistory(data.history, name));
		dispatch(updateInfo(data.info, name));
	});
};
