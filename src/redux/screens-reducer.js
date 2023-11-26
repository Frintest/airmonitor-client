import { API } from "../api/api.js";

const UPDATE_AIR_STATE = "UPDATE_AIR_STATE";
const TOGGLE_SCREENS = "TOGGLE_SCREENS";
const CLEAR_SCREEN = "CLEAR_SCREEN";
const ADD_AIR_PROP_IN_SCREEN = "ADD_AIR_PROP_IN_SCREEN";

const generateScreens = (screenCount) => {
	const screens = [];
	for (let i = 0; i < screenCount; i++) {
		screens[i] = {
			id: i,
			value: i === 0 ? "Главная" : i,
			isActive: i === 0 ? true : false,
			elements: [],
		}
	}
	return screens;
};

const initialState = {
	data: [],
	screens: generateScreens(6),
	activeScreenIndex: 0,
};

const ScreensReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_AIR_STATE: {
			const screens = state.screens.map((el, index) => {
				if (index == action.id && action.id == 0) {
					state.data = action.data;
					el.elements = action.data;
				}
				// } else {
				// 	el.elements = el.elements.map((item) => {
				// 		action.data.map((new_el) => {
				// 			if (item.sensor_name === new_el.sensor_name) {
				// 				item = new_el;
				// 			}
				// 		});

				// 		return item;
				// 	});
				// }

				return el;
			});

			return {
				...state,
				screens: screens,
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
				screens: screens,
				activeScreenIndex: action.id,
			};
		};

		case CLEAR_SCREEN: {
			const screens = state.screens.map((el) => {
				if (el.id === 0) {
					el.isActive = true;
					state.activeScreenIndex = 0;
				}

				if (el.id !== 0 && el.isActive === true) {
					el.elements = [];
					el.isActive = false;
				}

				return el;
			});

			return {
				...state,
				screens: screens,
			};
		};

		case ADD_AIR_PROP_IN_SCREEN: {
			const screens = state.screens.map((el) => {
				if (el.id == state.activeScreenIndex) {
					const airProp = state.data.find((el) => el.sensor_name === action.name);
					el.elements.push(airProp);
				}

				return el;
			});
			return {
				...state,
				screens: screens,
			}
		}

		default:
			return state;
	}
};

const updateAirState = (data, id) => ({ type: UPDATE_AIR_STATE, data, id });
const toggleScreens = (id) => ({ type: TOGGLE_SCREENS, id });
const clearScreen = () => ({ type: CLEAR_SCREEN });
const addAirPropInScreen = (name) => ({ type: ADD_AIR_PROP_IN_SCREEN, name });

export const updateAirStateThunk = (id) => (dispatch) => {
	API.getState(data => {
		dispatch(updateAirState(data, id));
	});
};

export const toggleScreensThunk = (id) => (dispatch) => {
	dispatch(toggleScreens(id));
};

export const clearScreenThunk = () => (dispatch) => {
	dispatch(clearScreen());
};

export const addAirPropInScreenThunk = (name) => (dispatch) => {
	dispatch(addAirPropInScreen(name));
};

export default ScreensReducer;