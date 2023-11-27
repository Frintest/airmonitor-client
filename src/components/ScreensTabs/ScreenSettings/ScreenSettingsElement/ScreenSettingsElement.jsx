import React from "react";
import s from "./ScreenSettingsElement.module.scss";

export const ScreenSettingsElement = (props) => {
   const [isChecked, setIsChecked] = React.useState(false);

   const onToggleCheckbox = () => {
      setIsChecked((isChecked) => !isChecked);
      if (!isChecked) {
         props.addAirPropInScreenThunk(props.sensor_name);
      } else {
         props.removeAirPropInScreenThunk(props.sensor_name);
      }
   };
   return (
      <div className={s.wrap}>
         <label className={s.label} htmlFor={props.ui_name}>
            <span className={s.name}>{props.ui_name}</span>
            <input
               className={s.checkbox}
               type="checkbox"
               id={props.sensor_name}
               checked={isChecked}
               onChange={onToggleCheckbox}
            />
         </label>
      </div>
   );
};
