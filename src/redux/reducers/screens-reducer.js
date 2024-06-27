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

const initialState = {
	screens: generateScreens(6), // include main screen
	activeScreen: 0,
	levelColors: {
		1: { light: "#22d3ee", dark: "#06b6d4" },
		2: { light: "#4ade80", dark: "#22c55e" },
		3: { light: "#facc15", dark: "#eab308" },
		4: { light: "#fb923c", dark: "#f97316" },
		5: { light: "#f87171", dark: "#ef4444" },
	},
};

export const ScreensReducer = (state = initialState, action) => {
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

			return {
				...state,
				screens: { ...state.screens, [action.id]: screen }
			};
		}

		case UPDATE_MAIN_SCREEN: {
			const screens = state.screens;
			const screen = { ...screens[0] };
			screen.elements = action.data;

			return {
				...state,
				screens: { ...state.screens, 0: screen }
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
			const screenId = state.activeScreen;
			const screen = { ...screens[screenId] };
			screen.elements = {};

			return {
				...state,
				screens: { ...state.screens, [screenId]: screen },
			};
		}

		case ADD_ITEM: {
			const screens = { ...state.screens };
			const screenId = state.activeScreen;
			const screen = { ...screens[screenId] };
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
			const screen = { ...screens[screenId] };
			const airItem = action.item;
			delete screen.elements[airItem.sensor_name];

			return {
				...state,
				screens: { ...state.screens, [screenId]: screen },
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
export const removeScreenItem = (item) => ({ type: REMOVE_ITEM, item });
