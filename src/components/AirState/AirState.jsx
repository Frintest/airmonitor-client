import React from "react";
import AirStateElement from "./AirStateElement/AirStateElement.jsx";
import s from "./AirState.module.scss";

export const AirState = (props) => {
   const stateElements = props.screens[props.activeScreenIndex].elements.map((el) => {
      return <AirStateElement el={el} key={el.sensor_name} />;
   });
   console.log("Component rerender");
   return <div className={s.wrap}>{stateElements}</div>;
};
