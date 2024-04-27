import React from "react";
import { ScreenItem } from "./ScreenItem/ScreenItem.jsx";
import s from "./Screen.module.scss";

export const Screen = (props) => {
	React.useEffect(() => {
      props.updateAirStateThunk(props.activeScreen);
   });

   const items = props.screens[props.activeScreen].elements.map((el) => {
      return <ScreenItem el={el} key={el.sensor_name} />;
   });
   return <div className={s.wrap}>{items}</div>;
};
