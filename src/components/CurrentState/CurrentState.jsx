import React from "react";
import "./CurrentState.module.scss";

const CurrentState = (props) => {
   React.useEffect(() => {
      props.getLastStateThunk();
   }, []);

   return (
      <ul>
         <li>pm2 = {props.state.pm2}</li>
         <li>pm0 = {props.state.pm10}</li>
         <li>temp = {props.state.temp}</li>
         <li>humidity = {props.state.humidity}</li>
         <li>pressure = {props.state.pressure}</li>
         <li>CO2 = {props.state.CO2}</li>
         <li>TVOC = {props.state.TVOC}</li>
         <li>eCO2 = {props.state.eCO2}</li>
      </ul>
   );
};

export default CurrentState;
