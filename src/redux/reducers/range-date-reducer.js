import { API } from "../../api/api.js";

const SET_ACTIVE_QUICK_RANGE = "range/SET_ACTIVE_QUICK_RANGE";
const UPDATE_EVERY_VALUE = "range/UPDATE_EVERY_VALUE";
const UPDATE_EVERY_EXIST = "range/UPDATE_EVERY_EXIST";
const GET_DATE_INTERVAL = "range/GET_DATE_INTERVAL";
const GET_INFO_EVERY = "range/GET_INFO_EVERY";
const SEND_RANGE_INFO = "range/SEND_RANGE_INFO";

const initialState = {
	quickRange: {
		0: {
			id: 0,
			name: "Пользовательский",
			isActive: true,
		},
		1: {
			id: 1,
			name: "Последний час",
			isActive: false,
		},
		2: {
			id: 2,
			name: "Последние 24 часа",
			isActive: false,
		},
		3: {
			id: 3,
			name: "Последняя неделя",
			isActive: false,
		},
		4: {
			id: 4,
			name: "Последний месяц",
			isActive: false,
		},
		5: {
			id: 5,
			name: "Последний год",
			isActive: false,
		},
		6: {
			id: 6,
			name: "Всё время",
			isActive: false,
		},
	},
	quickRangeActive: 0,
	date: {
		from: "Не выбрано",
		to: "Не выбрано",
	},
	every: {
		years: {
			isExist: false,
			isExistUI: false,
			value: 1,
			ui_name: "Года",
			name: "years",
		},
		month: {
			isExist: false,
			isExistUI: false,
			value: 1,
			ui_name: "Месяца",
			name: "month",
		},
		days: {
			isExist: true,
			isExistUI: true,
			value: 1,
			ui_name: "Дни",
			name: "days",
		},
		hours: {
			isExist: true,
			isExistUI: true,
			value: 1,
			ui_name: "Часы",
			name: "hours",
		},
		minutes: {
			isExist: true,
			isExistUI: true,
			value: 30,
			ui_name: "Минуты",
			name: "minutes",
		},
	},
	sendRangeInfoTrigger: true,
};

export const RangeDateReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_ACTIVE_QUICK_RANGE: {
			const quickRange = { ...state.quickRange };
			const active = state.quickRangeActive;

			const prevRange = { ...quickRange[active] };
			prevRange.isActive = false;

			const newRange = quickRange[action.id];
			newRange.isActive = true;

			return {
				...state,
				quickRange: {
					...state.quickRange,
					[active]: prevRange,
					[action.id]: newRange,
				},
				quickRangeActive: action.id,
			}
		}

		case UPDATE_EVERY_VALUE: {
			return {
				...state,
				every: {
					...state.every,
					[action.name]: {
						...state.every[action.name],
						value: action.value,
					}
				}
			}
		}

		case UPDATE_EVERY_EXIST: {
			return {
				...state,
				every: {
					...state.every,
					[action.name]: {
						...state.every[action.name],
						isExist: action.value === 0 ? false : true,
					}
				}
			}
		}

		case SEND_RANGE_INFO: {
			return {
				...state,
				sendRangeInfoTrigger: !state.sendRangeInfoTrigger,
			}
		}

		default:
			return state;
	}
};

export const setActiveQuickRange = (id) => ({ type: SET_ACTIVE_QUICK_RANGE, id });
export const updateEveryValue = (name, value) => ({ type: UPDATE_EVERY_VALUE, name, value });
export const updateEveryExist = (name, value) => ({ type: UPDATE_EVERY_EXIST, name, value });
export const getDateInterval = (from, to) => ({ type: GET_DATE_INTERVAL, from, to });
export const getInfoEvery = (every) => ({ type: GET_INFO_EVERY, every });

const sendRangeInfo = () => ({ type: SEND_RANGE_INFO });
export const sendRangeInfoThunk = (name, range, date, every) => (dispatch) => {
	dispatch(sendRangeInfo());

	const info = { name, range, date, every }
	API.sendRangeInfo(info);
};
