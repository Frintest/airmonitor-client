import { API } from "../api/api.js";

const UPDATE = "history/UPDATE";

const initialState = {
	history: {},
};

const AirHistoryReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE: {
			return {
				...state,
				history: {
					...state.history,
					[action.name]: action.data,
				},
			};
		}

		default:
			return state;
	}
};

const updateAirHistory = (data, name) => ({ type: UPDATE, data, name });

export const updateAirHistoryThunk = (name) => (dispatch) => {
	API.sendHistoryItemName(name);

	API.updateAirHistory((data) => {
		dispatch(updateAirHistory(data, name));
	});
};

export default AirHistoryReducer;
