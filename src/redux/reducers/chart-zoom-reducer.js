const RESET_ZOOM = "chart-zoom/RESET_ZOOM";
const INCREASE_ZOOM = "chart-zoom/INCREASE_ZOOM";
const DECREASE_ZOOM = "chart-zoom/DECREASE_ZOOM";

const initialState = {
	chartHeight: 600,
	heightStep: 60,
	value: 0,
	valueStep: 10,
	min: -90,
	max: 90,
};

export const ChartZoomReducer = (state = initialState, action) => {
	switch (action.type) {
		case RESET_ZOOM: {
			return {
				...state,
				value: 0,
				chartHeight: 600,
			};
		}

		case INCREASE_ZOOM: {
			if (state.value < state.max) {
				return {
					...state,
					value: state.value + state.valueStep,
					chartHeight: state.chartHeight + state.heightStep,
				};
			} else {
				return {
					...state,
				};
			}
		}

		case DECREASE_ZOOM: {
			if (state.value > state.min) {
				return {
					...state,
					value: state.value - state.valueStep,
					chartHeight: state.chartHeight - state.heightStep,
				};
			} else {
				return {
					...state,
				};
			}
		}

		default:
			return state;
	}
};

export const resetZoom = () => ({ type: RESET_ZOOM });
export const increaseZoom = () => ({ type: INCREASE_ZOOM });
export const decreaseZoom = () => ({ type: DECREASE_ZOOM });
