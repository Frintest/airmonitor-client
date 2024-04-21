import { API } from "../api/api.js";

const SET_ACTIVE = "SET_ACTIVE";
const SET_INACTIVE = "SET_INACTIVE";
const UPDATE_DATA = "UPDATE_DATA";

const initialState = {
	sensor_name: null,
	ui_name: null,
	value: null,
	unit: null,
	history: null,
	active: false,
};

const ScreenItemReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_ACTIVE: {
			return {
				...state,
				active: true,
			}
		}

		case SET_INACTIVE: {
			return {
				...state,
				active: false,
			}
		}

		case UPDATE_DATA: {
			return {
				...state,
				...action.data,
				history,
			}
		}

		default:
			return state;
	}
};

export const setActive = () => ({ type: SET_ACTIVE });
export const setInactive = () => ({ type: SET_INACTIVE });

const updateData = (data) => ({ type: UPDATE_DATA, data });
export const updateDataThunk = () => (dispatch) => {
	API.getAirState((data) => {
		dispatch(updateData(data));
	});
};

export default ScreenItemReducer;
