import { API } from "../../api/api.js";

const UPDATE = "air-state/UPDATE";

const initialState = {
	data: {},
};

export const AirStateReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE: {
			return { ...state, data: action.data };
		}

		default:
			return state;
	}
};

const updateAirState = (data) => ({ type: UPDATE, data });

export const updateAirStateThunk = () => (dispatch) => {
	API.getAirState((data) => {
		dispatch(updateAirState(data));
	});
};
