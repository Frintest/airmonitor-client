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
};

const ScreensTabsReducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_SCREENS: {
			let screens = state.screens.map((el, index) => {
				if (el.isActive) {
					el.isActive = false;
				}

				if (index == action.id) {
					el.isExists = true;
					el.isActive = true;
				}

				return el;
			});

			return {
				...state,
				screens: [...screens],
			}
		};
		case TOGGLE_SCREENS: {
			let screens = state.screens.map((el) => {
				if (el.isActive) el.isActive = false;
				if (el.id == action.id) el.isActive = true;

				return el;
			});

			return {
				...state,
				screens: [...screens],
			}
		}
		default:
			return state;
	}
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