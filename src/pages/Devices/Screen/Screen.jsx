import React from "react";
import { ScreenItem } from "./ScreenItem/ScreenItem.jsx";
import s from "./Screen.module.scss";

export const Screen = (props) => {
   React.useEffect(() => {
      props.updateMainScreen(props.airState);
      props.updateScreen(props.screen.id, props.airState);
   }, [props.airState]);

   const elements = Object.values(props.screen.elements).map((airItem) => {
      return <ScreenItem airItem={airItem} key={airItem.sensor_name} />;
   });

   return <div className={s.wrap}>{elements}</div>;
};
