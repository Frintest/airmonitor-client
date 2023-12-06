import React from "react";
import AirStateElement from "./AirStateElement/AirStateElement.jsx";
import s from "./AirState.module.scss";

const AirState = (props) => {
   const stateElements = props.state.screens[props.state.activeScreenIndex].elements.map((el) => {
      return (
         <AirStateElement el={el} key={el.sensor_name} />
      );
   });

   return <div className={s.wrap}>{stateElements}</div>;
};

export default AirState;
