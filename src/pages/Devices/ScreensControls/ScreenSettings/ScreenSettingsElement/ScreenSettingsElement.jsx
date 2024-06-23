import React from "react";
import s from "./ScreenSettingsElement.module.scss";
import { formatText } from "../../../../../utilities/helpers/format-text-airprop.js";

export const ScreenSettingsElement = (props) => {
   const airItem = props.airItem;

   const onClick = () => {
      if (!props.isChecked) {
         props.addScreenItem(airItem);
      } else {
         props.removeScreenItem(airItem);
      }
   };

   return (
      <label className={s.label}>
         <span className={s.name}>{formatText(airItem.ui_name)}</span>
         <input
            className={s.checkbox}
            type="checkbox"
            checked={props.isChecked}
            onChange={onClick}
         />
      </label>
   );
};
