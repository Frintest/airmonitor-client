import { API } from "../api/api.js";

const UPDATE_AIR_STATE = "UPDATE_AIR_STATE";
const SET_ACTIVE_SCREEN = "SET_ACTIVE_SCREEN";
const CLEAR_SCREEN = "CLEAR_SCREEN";
const ADD_SCREEN_ITEM = "ADD_SCREEN_ITEM";
const REMOVE_SCREEN_ITEM = "REMOVE_SCREEN_ITEM";
const ADD_AIR_PROP_HISTORY = "ADD_AIR_PROP_HISTORY";

const generateScreens = (count) => {
	const screens = [
		{
			id: 0,
			value: "Главная",
			isActive: true,
			elements: {},
			isChange: false,
		}
	];
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
};

const initialState = {
	data: {},
	screens: generateScreens(6), // include main screen
	activeScreen: 0,
	standards,
	levelColors: {
		1: { light: "#22d3ee", dark: "#06b6d4" },
		2: { light: "#34d399", dark: "#10b981" },
		3: { light: "#fbbf24", dark: "#fbbf24" },
		4: { light: "#fb923c", dark: "#f97316" },
		5: { light: "#f87171", dark: "#ef4444" },
	},
	history: {},
};

const ScreensReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_AIR_STATE: {
			// tod разделение data и screens update
			let data = {};
			action.data.forEach((item) => {
				data[item.sensor_name] = item;
			});

			const screens = state.screens.slice();
			let screen = screens[action.id];
			let elements = screen.elements;
			screen.elements = Object.values(elements).map((item) => {
				if (item != {}) {
					elements[item.sensor_name] = data[item.sensor_name];
				}
			});
			screen.elements = elements;

			if (action.id === 0) {
				screens[0].elements = data;
			};

			return {
				...state,
				screens,
				data,
			};
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
			screens[id].elements = {};

			return {
				...state,
				screens,
			};
		}

		case ADD_SCREEN_ITEM: {
			const screens = state.screens.slice();
			const id = state.activeScreen;
			screens[id].elements[action.name] = state.data[action.name];

			return {
				...state,
				screens,
			};
		}

		case REMOVE_SCREEN_ITEM: {
			const screens = state.screens.slice();
			const id = state.activeScreen;
			delete screens[id].elements[action.name];

			return {
				...state,
				screens,
			};
		}

		case ADD_AIR_PROP_HISTORY: {
			return {
				...state,
				history: {
					[action.name]: action.data,
					...state.history,
				},
			};
		}

		default:
			return state;
	}
};

const updateAirState = (data, id) => ({ type: UPDATE_AIR_STATE, data, id });
export const updateAirStateThunk = (id) => (dispatch) => {
	API.getAirState((data) => {
		dispatch(updateAirState(data, id));
	});
};

export const setActiveScreen = (id) => ({ type: SET_ACTIVE_SCREEN, id });
const getActiveScreen = (screens, active) => {
	let activeScreens = screens.map((el) => {
		if (el.isActive) {
			el.isActive = false;
		}
		return el;
	});
	activeScreens[active].isActive = true;
	return activeScreens;
};

export const clearScreen = () => ({ type: CLEAR_SCREEN });
export const addScreenItem = (name) => ({ type: ADD_SCREEN_ITEM, name });
export const removeScreenItem = (name) => ({ type: REMOVE_SCREEN_ITEM, name });

export const addAirPropHistory = (data, name) => ({ type: ADD_AIR_PROP_HISTORY, data, name });
export const addAirPropHistoryThunk = (name) => (dispatch) => {
	API.getAirPropHistory((data) => {
		dispatch(addAirPropHistory(data, name));
	});
};

export default ScreensReducer;
