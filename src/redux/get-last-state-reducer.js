import { API } from "../api/api";

const GET_LAST_STATE = "GET_LAST_STATE";

const initialState = {
   stateAir: [
      {
         sensor_name: "pm2",
         ui_name: "pm2",
         value: 0,
      },
      {
         sensor_name: "pm10",
         ui_name: "pm10",
         value: 0,
      },
      {
         sensor_name: "temp",
         ui_name: "Температура",
         value: 0,
      },
      {
         sensor_name: "humidity",
         ui_name: "Влажность",
         value: 0,
      },
      {
         sensor_name: "pressure",
         ui_name: "Давление",
         value: 0,
      },
      {
         sensor_name: "CO2",
         ui_name: "CO2",
         value: 0,
      },
      {
         sensor_name: "TVOC",
         ui_name: "TVOC",
         value: 0,
      },
      {
         sensor_name: "eCO2",
         ui_name: "eCO2",
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
                  sensor_name: "pm2",
                  ui_name: "pm2",
                  value: data.pm2,
               },
               {
                  sensor_name: "pm10",
                  ui_name: "pm10",
                  value: data.pm10,
               },
               {
                  sensor_name: "temp",
                  ui_name: "Температура",
                  value: data.temp,
               },
               {
                  sensor_name: "humidity",
                  ui_name: "Влажность",
                  value: data.humidity,
               },
               {
                  sensor_name: "pressure",
                  ui_name: "Давление",
                  value: data.pressure,
               },
               {
                  sensor_name: "CO2",
                  ui_name: "CO2",
                  value: data.CO2,
               },
               {
                  sensor_name: "TVOC",
                  ui_name: "TVOC",
                  value: data.TVOC,
               },
               {
                  sensor_name: "eCO2",
                  ui_name: "eCO2",
                  value: data.eCO2,
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
   });
};

export default getLastStateReducer;
