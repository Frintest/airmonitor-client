import { API } from "../../api/api.js";

const SET_ACTIVE_QUICK_RANGE = "range/SET_ACTIVE_QUICK_RANGE";
const UPDATE_EVERY_VALUE = "range/UPDATE_EVERY_VALUE";
const GET_DATE_INTERVAL = "range/GET_DATE_INTERVAL";
const GET_INFO_EVERY = "range/GET_INFO_EVERY";
const FILTER_INTERVAL_LABELS = "range/FILTER_INTERVAL_LABELS";

const initialState = {
	quickRange: {
		"custom": {
			name: "custom",
			ui_name: "Пользовательский",
			isActive: true,
		},
		"last-hour": {
			name: "last-hour",
			ui_name: "Последний час",
			isActive: false,
		},
		"last-day": {
			name: "last-day",
			ui_name: "Последние 24 часа",
			isActive: false,
		},
		"last-week": {
			name: "last-week",
			ui_name: "Последняя неделя",
			isActive: false,
		},
		"last-month": {
			name: "last-month",
			ui_name: "Последний месяц",
			isActive: false,
		},
		"last-year": {
			name: "last-year",
			ui_name: "Последний год",
			isActive: false,
		},
	},
	quickRangeActive: "custom",
	date: {
		from: "2024-07-03 08:00:56",
		to: "2024-07-03 23:20:56",
	},
	every: {
		// years: {
		// 	name: "years",
		// 	ui_name: "Года",
		// 	value: 0,
		// 	min: 0,
		// 	max: 20,
		// 	isExist: false,
		// },
		month: {
			name: "month",
			ui_name: "Месяца",
			value: 0,
			min: 0,
			max: 11,
			isExist: false,
		},
		days: {
			name: "days",
			ui_name: "Дни",
			value: 0,
			min: 0,
			max: 365,
			isExist: false,
		},
		hours: {
			name: "hours",
			ui_name: "Часы",
			value: 0,
			min: 0,
			max: 23,
			isExist: false,
		},
		minutes: {
			name: "minutes",
			ui_name: "Минуты",
			value: 0,
			min: 0,
			max: 59,
			isExist: false,
		},
	},
};

export const RangeDateReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_ACTIVE_QUICK_RANGE: {
			const quickRange = { ...state.quickRange };
			const active = state.quickRangeActive;

			const prevRange = { ...quickRange[active] };
			prevRange.isActive = false;

			const newRange = quickRange[action.name];
			newRange.isActive = true;

			return {
				...state,
				quickRange: {
					...state.quickRange,
					[active]: prevRange,
					[action.name]: newRange,
				},
				quickRangeActive: action.name,
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

		case FILTER_INTERVAL_LABELS: {
			const everyCopy = { ...state.every };
			const resetEvery = {};
			for (let name in everyCopy) {
				const item = everyCopy[name];
				resetEvery[name] = {
					...item,
					value: 0,
					isExist: false,
				};
			}

			let every = {};

			switch (action.activeRangeName) {
				case "custom": {
					break;
				}

				case "last-hour": {
					every = {
						minutes: {
							value: 2,
						},
					};
					break;
				}

				case "last-day": {
					every = {
						hours: {
							value: 1,
						},
						minutes: {
							value: 0,
						},
					};
					break;
				}

				case "last-week": {
					every = {
						days: {
							value: 1,
						},
						hours: {
							value: 0,
						},
						minutes: {
							value: 0,
						},
					};
					break;
				}

				case "last-month": {
					every = {
						days: {
							value: 1,
						},
						hours: {
							value: 0,
						},
						minutes: {
							value: 0,
						},
					};
					break;
				}

				case "last-year": {
					every = {
						month: {
							value: 1,
						},
						days: {
							value: 0,
						},
						hours: {
							value: 0,
						},
						minutes: {
							value: 0,
						},
					};
					break;
				}
			}

			for (let name in every) {
				const item = every[name];
				every[name] = {
					...state.every[name],
					value: item.value,
					isExist: true,
				}
			}

			return {
				...state,
				every: {
					...resetEvery,
					...every,
				},
			}
		}

		default:
			return state;
	}
};

export const setActiveQuickRange = (name) => ({ type: SET_ACTIVE_QUICK_RANGE, name });
export const updateEveryValue = (name, value) => ({ type: UPDATE_EVERY_VALUE, name, value });
export const getDateInterval = (from, to) => ({ type: GET_DATE_INTERVAL, from, to });
export const getInfoEvery = (every) => ({ type: GET_INFO_EVERY, every });
export const filterIntervalLabels = (activeRangeName) => ({ type: FILTER_INTERVAL_LABELS, activeRangeName });

export const sendRangeInfoThunk = (name, range, date, every) => (dispatch) => {
	const info = { name, range, date, every }
	API.sendRangeInfo(info);
};
