import React from "react";
import { ScreenItem } from "./ScreenItem/ScreenItem.jsx";
import s from "./Screen.module.scss";

export const Screen = (props) => {
   React.useEffect(() => {
      props.updateAirStateThunk(props.activeScreen);
   });

   const screen = props.screens[props.activeScreen];
   const elements = Object.values(screen.elements).map((item) => {
      return <ScreenItem item={item} key={item.sensor_name} />;
   });

   return <div className={s.wrap}>{elements}</div>;
};
