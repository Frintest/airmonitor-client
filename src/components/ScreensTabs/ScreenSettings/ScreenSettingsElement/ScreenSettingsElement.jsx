import React from "react";
import s from "./ScreenSettingsElement.module.scss";

export const ScreenSettingsElement = (props) => {
   return (
      <div className={s.wrap}>
         <label className={s.label} htmlFor={props.ui_name}>
            <span className={s.name}>{props.ui_name}</span>
            <input className={s.checkbox} type="checkbox" id={props.ui_name} />
         </label>
      </div>
   );
};
