import React from "react";
import s from "./Settings.module.scss";
import { Popup } from "../../../../../../components/Popup/Popup.jsx";

export const Settings = (props) => {
   return (
      <Popup title={"Диапазон дат/времени"} isVisible={props.isVisible} onClose={props.onClose}>
         123
      </Popup>
   );
};
