import React from "react";
import StateAirElement from "./StateAirElement/StateAirElement.jsx";
import s from "./StateAir.module.scss";

const StateAir = (props) => {
   const stateElements = props.state.screens[props.state.activeScreenIndex].elements.map((el) => {
      const { sensor_name, ui_name, value, unit } = el;

      return <StateAirElement name={ui_name} value={value} unit={unit} key={sensor_name} />;
   });

   return <div className={s.wrap}>{stateElements}</div>;
};

export default StateAir;
