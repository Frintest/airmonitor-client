import moment from "moment";
import { API } from "../../api/api.js";

const SET_ACTIVE_QUICK_RANGE = "range/SET_ACTIVE_QUICK_RANGE";
// const SET_INPUT_FROM_DATE = "range/SET_INPUT_FROM_DATE";

const formatNowDate = (date) => {
	moment.locale("ru");
	const formatDate = moment(date).format("MM/DD/YYYY");
	return formatDate;
};

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

		default:
			return state;
	}
};

export const setActiveQuickRange = (id) => ({ type: SET_ACTIVE_QUICK_RANGE, id });
// export const get = () => ({type: SET_INPUT_FROM_DATE});
