import { API } from "../api/api";

const GET_LAST_STATE = "GET_LAST_STATE";

const initialState = {
	stateAir: [],
};

const getLastStateReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_LAST_STATE: {
			let data = action.data;
			return {
				stateAir: [...data],
			};
		}
		default:
			return state;
	}
};

export const getLastState = (data) => ({ type: GET_LAST_STATE, data });

export const getLastStateThunk = () => (dispatch) => {
	API.getState(data => {
		dispatch(getLastState(data));
	});
};

export default getLastStateReducer;
