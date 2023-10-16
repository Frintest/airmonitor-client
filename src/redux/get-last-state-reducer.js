import { API } from "../api/api";

const GET_LAST_STATE = "GET_LAST_STATE";

const initialState = {
	stateAir: [
		{
			sensor_name: "pm1",
			ui_name: "pm1",
			unit: "ppm",
			value: 0,
		},
		{
			sensor_name: "pm2",
			ui_name: "pm2.5",
			unit: "ppm",
			value: 0,
		},
		{
			sensor_name: "pm10",
			ui_name: "pm10",
			unit: "ppm",
			value: 0,
		},
		{
			sensor_name: "temp",
			ui_name: "Температура",
			unit: "°C",
			value: 0,
		},
		{
			sensor_name: "humidity",
			ui_name: "Влажность",
			unit: "%",
			value: 0,
		},
		{
			sensor_name: "CO2",
			ui_name: "CO2",
			unit: "ppm",
			value: 0,
		},
		{
			sensor_name: "TVOC",
			ui_name: "TVOC",
			unit: "mg/m3",
			value: 0,
		},
	],
};

const getLastStateReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_LAST_STATE: {
			let data = action.data;
			return {
				stateAir: [
					{
						sensor_name: "pm1",
						ui_name: "pm1",
						unit: "ppm",
						value: data.pm1,
					},
					{
						sensor_name: "pm2",
						ui_name: "pm2.5",
						unit: "ppm",
						value: data.pm2,
					},
					{
						sensor_name: "pm10",
						ui_name: "pm10",
						unit: "ppm",
						value: data.pm10,
					},
					{
						sensor_name: "temp",
						ui_name: "Температура",
						unit: "°C",
						value: data.temp,
					},
					{
						sensor_name: "humidity",
						ui_name: "Влажность",
						unit: "%",
						value: data.humidity,
					},
					{
						sensor_name: "CO2",
						ui_name: "CO2",
						unit: "ppm",
						value: data.CO2,
					},
					{
						sensor_name: "TVOC",
						ui_name: "TVOC",
						unit: "mg/m3",
						value: data.TVOC,
					},
				],
			};
		}
		default:
			return state;
	}
};

export const getLastState = (data) => ({ type: GET_LAST_STATE, data });

export const getLastStateThunk = () => (dispatch) => {
	API.getState().then((data) => {
		dispatch(getLastState(data));
		console.log(data);
	});
};

export default getLastStateReducer;
