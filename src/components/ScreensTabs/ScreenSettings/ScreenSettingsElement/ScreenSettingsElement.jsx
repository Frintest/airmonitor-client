import React from "react";
import s from "./ScreenSettingsElement.module.scss";
import { formatText } from "../../../../utilities/helpers/format-text-airprop.js";

export const ScreenSettingsElement = (props) => {
   const onToggleCheckbox = () => {
      if (!props.isChecked) {
         props.addAirPropInScreen(props.sensor_name);
      } else {
         props.removeAirPropInScreen(props.sensor_name);
      }
   };

   return (
      <div className={s.wrap}>
         <label className={s.label} htmlFor={props.ui_name}>
            <span className={s.name}>{formatText(props.ui_name)}</span>
            <input
               className={s.checkbox}
               type="checkbox"
               id={props.sensor_name}
               checked={props.isChecked}
               onChange={onToggleCheckbox}
            />
         </label>
      </div>
   );
};
