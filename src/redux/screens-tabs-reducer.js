import e from "express";
import { API } from "../api/api";

const UPDATE_AIR_STATE = "UPDATE_AIR_STATE";
const CREATE_SCREENS = "CREATE_SCREENS";
const TOGGLE_SCREENS = "TOGGLE_SCREENS";

const initialState = {
	screens: [
		{
			id: 0,
			value: "Главная",
			isExists: true,
			isActive: true,
			elements: [],
		},
		{
			id: 1,
			value: 1,
			isExists: true,
			isActive: false,
			elements: [],
		},
		{
			id: 2,
			value: 2,
			isExists: false,
			isActive: false,
			elements: [],
		},
		{
			id: 3,
			value: 3,
			isExists: false,
			isActive: false,
			elements: [],
		},
		{
			id: 4,
			value: 4,
			isExists: false,
			isActive: false,
			elements: [],
		},
		{
			id: 5,
			value: 5,
			isExists: false,
			isActive: false,
			elements: [],
		},
		{
			id: 6,
			value: 6,
			isExists: false,
			isActive: false,
			elements: [],
		},
	],
	activeScreenIndex: 0,
};

const ScreensTabsReducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_SCREENS: {
			let screens = state.screens.map((el, index) => {
				if (el.isActive) {
					el.isActive = false;
				}

				if (index === action.id) {
					el.isExists = true;
					el.isActive = true;
				}

				return el;
			});

			return {
				...state,
				screens: [...screens],
				activeScreenIndex: action.id,
			};
		};
		case TOGGLE_SCREENS: {
			let screens = state.screens.map((el) => {
				if (el.isActive) {
					el.isActive = false;
				};

				if (el.id === action.id) {
					el.isActive = true;
				}

				return el;
			});

			return {
				...state,
				screens: [...screens],
				activeScreenIndex: action.id,
			};
		}
		case UPDATE_AIR_STATE: {
			const updateElements = () => {
				state.screens[action.id].elements.map((el) => {
					if (action.id == 0) {
						el.elements = [...action.data];
					}

					return el;
				});

				// else {
				// 	return state.screens[action.id].elements.map((el) => {
				// 		action.data.map((new_el) => {
				// 			if (el.sensor_name === new_el.sensor_name) {
				// 				el = new_el;
				// 			}
				// 		});

				// 		return el;
				// 	});
				// }
			};

			let screens = [
				...state.screens,
			];

			return {
				...state,
				screens: [...screens],
			};
		}
		default:
			return state;
	}
};

const setLastAirState = (data, id) => ({ type: UPDATE_AIR_STATE, data, id });

export const setLastAirStateThunk = (id) => (dispatch) => {
	API.getState(data => {
		dispatch(setLastAirState(data, id));
	});
};

const CreateScreen = (id) => ({ type: CREATE_SCREENS, id });

export const CreateScreenThunk = (id) => (dispatch) => {
	dispatch(CreateScreen(id));
};

const ToggleScreen = (id) => ({ type: TOGGLE_SCREENS, id });

export const ToggleScreenThunk = (id) => (dispatch) => {
	dispatch(ToggleScreen(id));
};

export default ScreensTabsReducer;