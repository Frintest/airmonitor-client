import React from "react";
import StateAirElement from "./StateAirElement/StateAirElement";
import s from "./StateAir.module.scss";

const StateAir = (props) => {
   React.useEffect(() => {
      props.getLastStateThunk();
   }, []);

   const stateElements = props.state.stateAir.map(({ sensor_name, ui_name, value, unit }) => {
      return <StateAirElement name={ui_name} value={value} unit={unit} key={sensor_name} />;
   });

   return <div className={s.wrap}>{stateElements}</div>;
};

export default StateAir;
