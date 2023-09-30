import { API } from "../api/api";

const GET_LAST_STATE = "GET_LAST_STATE";

const initialState = {
   pm2: 0,
   pm10: 0,
   temp: 0,
   humidity: 0,
   pressure: 0,
   CO2: 0,
   TVOC: 0,
   eCO2: 0,
};

const getLastStateReducer = (state = initialState, action) => {
   switch (action.type) {
      case GET_LAST_STATE: {
         let data = action.data;
         return { ...data };
      }
      default:
         return state;
   }
};

export const getLastState = (data) => ({ type: GET_LAST_STATE, data });

export const getLastStateThunk = () => (dispatch) => {
   console.log(111);
   API.getState().then((data) => {
      dispatch(getLastState(data));
   });
};

export default getLastStateReducer;
