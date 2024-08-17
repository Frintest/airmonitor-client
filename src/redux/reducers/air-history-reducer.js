import { API } from "../../api/api.js";

const UPDATE_HISTORY = "history/UPDATE_HISTORY";
const UPDATE_ZOOM = "history/UPDATE_ZOOM";

const initialState = {
	history: {},
	zoom: 1,
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
						info: action.data.info,
						history: action.data.history,
					},
				},
			};
		}

		case UPDATE_ZOOM: {
			return {
				...state,
				zoom: action.zoom,
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

export const updateZoom = (zoom) => ({ type: UPDATE_ZOOM, zoom });
