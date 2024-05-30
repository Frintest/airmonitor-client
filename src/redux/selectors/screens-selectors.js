export const screensSelector = (state) => {
	return state.ScreensReducer.screens;
};

export const screenSelector = (state) => {
	const screens = screensSelector(state);
	const screenId = state.ScreensReducer.activeScreen;
	const screen = screens[screenId];
	return screen;
};
