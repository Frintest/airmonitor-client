const UPDATE_SCREEN = "screens/UPDATE_SCREEN";
const UPDATE_MAIN_SCREEN = "screens/UPDATE_MAIN_SCREEN";
const SET_ACTIVE_SCREEN = "screens/SET_ACTIVE_SCREEN";
const CLEAR_SCREEN = "screens/CLEAR_SCREEN";
const ADD_ITEM = "screens/ADD_ITEM";
const REMOVE_ITEM = "screens/REMOVE_ITEM";

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
		case UPDATE_SCREEN: {
			const screens = state.screens;
			const screen = { ...screens[action.id] };
			const elementsCopy = {};

			Object.values(screen.elements).forEach((item) => {
				if (item != {}) {
					elementsCopy[item.sensor_name] = action.data[item.sensor_name];
				}
			});
			screen.elements = elementsCopy;

			return { ...state, screens: { ...state.screens, [action.id]: screen } };
		}

		case UPDATE_MAIN_SCREEN: {
			const screens = state.screens;
			const screen = { ...screens[0] };
			screen.elements = action.data;

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
			const screenId = state.activeScreen;
			const screen = screens[screenId];
			screen.elements = {};

			return {
				...state,
				screens: { ...state.screens, [screenId]: screen },
			};
		}

		case ADD_ITEM: {
			const screens = { ...state.screens };
			const screenId = state.activeScreen;
			const screen = screens[screenId];
			const airItem = action.item;
			screen.elements[airItem.sensor_name] = airItem;

			return {
				...state,
				screens: { ...state.screens, [screenId]: screen },
			};
		}

		case REMOVE_ITEM: {
			const screens = { ...state.screens };
			const screenId = state.activeScreen;
			const screen = screens[screenId];
			const airItem = action.item;
			screen.elements[airItem.sensor_name] = {};

			return {
				...state,
				screens: { ...state.screens, [id]: screen },
			};
		}

		default:
			return state;
	}
};

export const updateScreen = (id, data) => ({ type: UPDATE_SCREEN, id, data });
export const updateMainScreen = (data) => ({ type: UPDATE_MAIN_SCREEN, data });

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
export const addScreenItem = (item) => ({ type: ADD_ITEM, item });
export const removeScreenItem = (name) => ({ type: REMOVE_ITEM, name });

export default ScreensReducer;
