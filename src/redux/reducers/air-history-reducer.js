import { API } from "../../api/api.js";

const UPDATE_HISTORY = "history/UPDATE_HISTORY";

const initialState = {
	history: {},
};

export const AirHistoryReducer = (state = initialState, action) => {
	switch (action.type) {

		case UPDATE_HISTORY: {
			let info = action.data.info;
			const history = action.data.history;

			return {
				...state,
				history: {
					...state.history,
					[action.name]: {
						...state.history[action.name],
						info: info,
						history: history
					}
				}
			};
		}

		default:
			return state;
	}
};

const updateHistory = (data, name) => ({ type: UPDATE_HISTORY, name, data });

export const updateAirHistoryThunk = (name) => (dispatch) => {
	API.updateAirHistory((data) => {
		dispatch(updateHistory(data, name));
	});
};
