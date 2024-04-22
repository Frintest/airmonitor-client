import { API } from "../api/api.js";

const UPDATE_AIR_STATE = "UPDATE_AIR_STATE";
const TOGGLE_SCREENS = "TOGGLE_SCREENS";
const CLEAR_SCREEN = "CLEAR_SCREEN";
const ADD_AIR_PROP_IN_SCREEN = "ADD_AIR_PROP_IN_SCREEN";
const REMOVE_AIR_PROP_IN_SCREEN = "REMOVE_AIR_PROP_IN_SCREEN";
const ADD_AIR_PROP_HISTORY = "ADD_AIR_PROP_HISTORY";

const generateScreens = (screenCount) => {
	const screens = [];
	for (let i = 0; i < screenCount; i++) {
		screens[i] = {
			id: i,
			value: i === 0 ? "Главная" : i,
			isActive: i === 0 ? true : false,
			elements: [],
			isChange: i !== 0 ? true : false,
		};
	}
	return screens;
};

const standards = {
	pm1: {},
	temp: {},
	humidity: {},
	pm2: {
		content: [
			{ value: 75, desc: "Хорошо", level: 1 },
			{ value: 115, desc: "Лёгкое загрязнение", level: 2 },
			{ value: 150, desc: "Умеренное  загрязнение", level: 3 },
			{ value: 250, desc: "Сильное загрязнение", level: 4 },
			{ value: 500, desc: "Опасно", level: 5 },
		],
		source: "China Standard GB 3095—2012",
	},
	pm10: {
		content: [
			{ value: 150, desc: "Хорошо", level: 1 },
			{ value: 250, desc: "Лёгкое загрязнение", level: 2 },
			{ value: 350, desc: "Умеренное  загрязнение", level: 3 },
			{ value: 420, desc: "Сильное загрязнение", level: 4 },
			{ value: 600, desc: "Опасно", level: 5 },
		],
		source: "China Standard GB 3095—2012",
	},
	TVOC: {
		content: [
			{ value: 0.3, desc: "Хорошо", level: 1 },
			{ value: 1, desc: "Лёгкое загрязнение", level: 2 },
			{ value: 3, desc: "Умеренное  загрязнение", level: 3 },
			{ value: 10, desc: "Сильное загрязнение", level: 4 },
			{ value: "10+", desc: "Опасно", level: 5 },
		],
		source: "German Indoor Air Guidance Values",
	},
	CO2: {
		content: [
			{ value: 1000, desc: "Хорошо", level: 1 },
			{ value: 2000, desc: "Умеренное содержание", level: 2 },
			{ value: 3000, desc: "Высокое содержание", level: 3 },
			{ value: "3000+", desc: "Опасно", level: 4 },
		],
		source: "China Standard GB/T 18883—2002",
	},
};

const initialState = {
	data: [],
	screens: generateScreens(6), // include main screen
	activeScreen: 0,
	standards,
	levelColors: {
		1: { lightColor: "#22d3ee", darkColor: "#06b6d4" },
		2: { lightColor: "#34d399", darkColor: "#10b981" },
		3: { lightColor: "#fbbf24", darkColor: "#fbbf24" },
		4: { lightColor: "#fb923c", darkColor: "#f97316" },
		5: { lightColor: "#f87171", darkColor: "#ef4444" },
	},
	airPropHistory: {},
};

const ScreensReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_AIR_STATE: {
			const screens = state.screens.map((el, index) => {
				if (index === action.id && action.id === 0) {
					state.data = action.data;
					el.elements = state.data;
				} else {
					el.elements = el.elements.map((item) => {
						action.data.map((new_el) => {
							if (item.sensor_name === new_el.sensor_name) {
								item = new_el;
							}
						});

						return item;
					});
				}

				return el;
			});

			return {
				...state,
				screens,
			};
		}

		case TOGGLE_SCREENS: {
			let screens = state.screens.map((el) => {
				if (el.isActive) {
					el.isActive = false;
				}

				if (el.id === action.id) {
					el.isActive = true;
				}

				return el;
			});

			return {
				...state,
				screens: screens,
				activeScreen: action.id,
			};
		}

		case CLEAR_SCREEN: {
			const screens = state.screens.map((el) => {
				if (el.id === 0) {
					el.isActive = true;
					state.activeScreen = 0;
				}

				if (el.id !== 0 && el.isActive === true) {
					el.elements = [];
					el.isActive = false;
				}

				return el;
			});

			return {
				...state,
				screens,
			};
		}

		case ADD_AIR_PROP_IN_SCREEN: {
			const screens = state.screens.map((el) => {
				if (el.id === state.activeScreen) {
					const airProp = state.data.find((el) => el.sensor_name === action.name);
					el.elements.push(airProp);
				}

				return el;
			});
			return {
				...state,
				screens,
			};
		}

		case REMOVE_AIR_PROP_IN_SCREEN: {
			const screens = state.screens.map((el) => {
				if (el.id === state.activeScreen) {
					el.elements = el.elements.filter((el) => el.sensor_name != action.name);
				}

				return el;
			});

			return {
				...state,
				screens,
			};
		}

		case ADD_AIR_PROP_HISTORY: {
			return {
				...state,
				airPropHistory: {
					[action.name]: action.data,
					...state.airPropHistory,
				},
			};
		}

		default:
			return state;
	}
};

const updateAirState = (data, id) => ({ type: UPDATE_AIR_STATE, data, id });
export const toggleScreens = (id) => ({ type: TOGGLE_SCREENS, id });
export const clearScreen = () => ({ type: CLEAR_SCREEN });
export const addAirPropInScreen = (name) => ({ type: ADD_AIR_PROP_IN_SCREEN, name });
export const removeAirPropInScreen = (name) => ({ type: REMOVE_AIR_PROP_IN_SCREEN, name });
export const addAirPropHistory = (data, name) => ({ type: ADD_AIR_PROP_HISTORY, data, name });

export const updateAirStateThunk = (id) => (dispatch) => {
	API.getAirState((data) => {
		dispatch(updateAirState(data, id));
	});
};

export const addAirPropHistoryThunk = (name) => (dispatch) => {
	API.getAirPropHistory((data) => {
		dispatch(addAirPropHistory(data, name));
	});
};

export default ScreensReducer;
