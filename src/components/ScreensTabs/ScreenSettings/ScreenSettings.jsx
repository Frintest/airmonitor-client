import React from "react";
import s from "./ScreenSettings.module.scss";
import { ScreenSettingsElement } from "./ScreenSettingsElement/ScreenSettingsElement.jsx";

export const ScreenSettings = (props) => {
   const elements = props.data.map((el) => {
      return (
         <ScreenSettingsElement
            ui_name={el.ui_name}
				sensor_name={el.sensor_name}
            key={el.sensor_name}
            addAirPropInScreenThunk={props.addAirPropInScreenThunk}
				removeAirPropInScreenThunk={props.removeAirPropInScreenThunk}
         />
      );
   });

   return (
      <div className={s.wrap + (props.isVisible ? " " + s.visible : "")}>
         <div className={s.block}>
            <div className={s.header}>
               <p className={s.heading}>Блоки</p>
               <button className={s.closeBtn} onClick={() => props.setVisible(false)}></button>
            </div>

            <div className={s.elements}>{elements}</div>

            <button
               className={s.removeBtn}
               onClick={() => {
                  props.setVisible(false);
                  props.clearScreenThunk();
               }}
            >
               Очистить экран
            </button>
         </div>
      </div>
   );
};
