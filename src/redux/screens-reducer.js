import { API } from "../api/api.js";

const UPDATE_AIR_STATE = "UPDATE_AIR_STATE";
const SET_ACTIVE_SCREEN = "SET_ACTIVE_SCREEN";
const CLEAR_SCREEN = "CLEAR_SCREEN";
const ADD_SCREEN_ITEM = "ADD_SCREEN_ITEM";
const REMOVE_SCREEN_ITEM = "REMOVE_SCREEN_ITEM";
const UPDATE_AIR_HISTORY = "UPDATE_AIR_HISTORY";
const UPDATE_SCREEN = "UPDATE_SCREEN";
const UPDATE_MAIN_SCREEN = "UPDATE_MAIN_SCREEN";

const generateScreens = (count) => {
	const screens = {
		0: {
			id: 0,
			value: "Главная",
			isActive: true,
			elements: {},
			isChange: false,
		}
	};
	for (let i = 1; i < count; i++) {
		screens[i] = {
			id: i,
			value: i,
			isActive: false,
			elements: {},
			isChange: true,
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
			{ value: "75", text: "Хорошо", level: 1 },
			{ value: "115", text: "Лёгкое загрязнение", level: 2 },
			{ value: "150", text: "Умеренное  загрязнение", level: 3 },
			{ value: "250", text: "Сильное загрязнение", level: 4 },
			{ value: "500", text: "Опасно", level: 5 },
		],
		source: "China Standard GB 3095—2012",
	},
	pm10: {
		content: [
			{ value: "150", text: "Хорошо", level: 1 },
			{ value: "250", text: "Лёгкое загрязнение", level: 2 },
			{ value: "350", text: "Умеренное  загрязнение", level: 3 },
			{ value: "420", text: "Сильное загрязнение", level: 4 },
			{ value: "600", text: "Опасно", level: 5 },
		],
		source: "China Standard GB 3095—2012",
	},
	TVOC: {
		content: [
			{ value: "0.3", text: "Хорошо", level: 1 },
			{ value: "1", text: "Лёгкое загрязнение", level: 2 },
			{ value: "3", text: "Умеренное  загрязнение", level: 3 },
			{ value: "10", text: "Сильное загрязнение", level: 4 },
			{ value: "10+", text: "Опасно", level: 5 },
		],
		source: "German Indoor Air Guidance Values",
	},
	CO2: {
		content: [
			{ value: "1000", text: "Хорошо", level: 1 },
			{ value: "2000", text: "Умеренное содержание", level: 2 },
			{ value: "3000", text: "Высокое содержание", level: 3 },
			{ value: "3000+", text: "Опасно", level: 4 },
		],
		source: "China Standard GB/T 18883—2002",
	},
	eCO2: {},
};

const initialState = {
	data: {},
	history: {},
	screens: generateScreens(6), // include main screen
	activeScreen: 0,
	standards,
	levelColors: {
		1: { light: "#22d3ee", dark: "#06b6d4" },
		2: { light: "#34d399", dark: "#10b981" },
		3: { light: "#fbbf24", dark: "#f59e0b" },
		4: { light: "#fb923c", dark: "#f97316" },
		5: { light: "#f87171", dark: "#ef4444" },
	},
};

const ScreensReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_AIR_STATE: {
			return { ...state, data: action.data };
		}

		case UPDATE_SCREEN: {
			const screens = state.screens;
			const screen = { ...screens[action.id] };
			const elementsCopy = {};
			const data = state.data;

			Object.values(screen.elements).forEach((item) => {
				if (item != {}) {
					elementsCopy[item.sensor_name] = data[item.sensor_name];
				}
			});
			screen.elements = elementsCopy;

			return { ...state, screens: { ...state.screens, [action.id]: screen } };
		}

		case UPDATE_MAIN_SCREEN: {
			const screens = state.screens;
			const screen = { ...screens[0] };
			const data = state.data;
			screen.elements = data;

			return { ...state, screens: { ...state.screens, 0: screen } };
		}

		case SET_ACTIVE_SCREEN: {
			const screens = getActiveScreen(state.screens, action.id);

			return {
				...state,
				screens,
				activeScreen: action.id,
			};
		}

		case CLEAR_SCREEN: {
			const screens = getActiveScreen(state.screens, state.activeScreen);
			const id = state.activeScreen;
			const screen = screens[id];
			screen.elements = {};

			return {
				...state,
				screens: { ...state.screens, [id]: screen },
			};
		}

		case ADD_SCREEN_ITEM: {
			const screens = { ...state.screens };
			const id = state.activeScreen;
			const screen = screens[id];
			screen.elements[action.name] = state.data[action.name];

			return {
				...state,
				screens: { ...state.screens, [id]: screen },
			};
		}

		case REMOVE_SCREEN_ITEM: {
			const screens = { ...state.screens };
			const id = state.activeScreen;
			const screen = screens[id];
			screen.elements[action.name] = {};

			return {
				...state,
				screens: { ...state.screens, [id]: screen },
			};
		}

		case UPDATE_AIR_HISTORY: {
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

const updateAirState = (data) => ({ type: UPDATE_AIR_STATE, data });
export const updateAirStateThunk = () => (dispatch) => {
	API.getAirState((data) => {
		dispatch(updateAirState(data));
	});
};

export const updateScreen = (id) => ({ type: UPDATE_SCREEN, id });
export const updateMainScreen = () => ({ type: UPDATE_MAIN_SCREEN });

export const setActiveScreen = (id) => ({ type: SET_ACTIVE_SCREEN, id });
const getActiveScreen = (screens, active) => {
	let activeScreens = Object.values(screens).map((screen) => {
		if (screen.isActive) {
			screen.isActive = false;
		}
		return screen;
	});
	activeScreens[active].isActive = true;
	return activeScreens;
};

export const clearScreen = () => ({ type: CLEAR_SCREEN });
export const addScreenItem = (name) => ({ type: ADD_SCREEN_ITEM, name });
export const removeScreenItem = (name) => ({ type: REMOVE_SCREEN_ITEM, name });

const updateAirHistory = (data, name) => ({ type: UPDATE_AIR_HISTORY, data, name });
export const updateAirHistoryThunk = (name) => (dispatch) => {
	API.sendHistoryItemName(name);

	API.updateAirHistory((data) => {
		dispatch(updateAirHistory(data, name));
	});
};

export default ScreensReducer;
