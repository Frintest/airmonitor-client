import { API } from "../../api/api.js";

const UPDATE_AIR_STATE = "air-state/UPDATE_AIR_STATE";
const GET_STANDARDS = "air-state/GET_STANDARDS";

const initialState = {
	info: {},
	state: {},
	standards: {},
};

export const AirStateReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_AIR_STATE: {
			return {
				...state,
				info: action.airState.info,
				state: action.airState.state,
			};
		}

		case GET_STANDARDS: {
			return { ...state, standards: action.standards };
		}

		default:
			return state;
	}
};

const updateAirState = (airState) => ({ type: UPDATE_AIR_STATE, airState });

export const updateAirStateThunk = () => (dispatch) => {
	API.getAirState((airState) => {
		dispatch(updateAirState(airState));
	});
};

const getStandards = (standards) => ({ type: GET_STANDARDS, standards });
export const getStandardsThunk = () => (dispatch) => {
	API.getStandards((standards) => {
		dispatch(getStandards(standards));
	});
};
