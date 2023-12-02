import React from "react";
import s from "./ScreenSettings.module.scss";
import { ScreenSettingsElement } from "./ScreenSettingsElement/ScreenSettingsElement.jsx";

export const ScreenSettings = (props) => {
   const elements = props.state.data.map((el) => {
      return (
         <ScreenSettingsElement
            ui_name={el.ui_name}
            sensor_name={el.sensor_name}
            key={el.sensor_name}
            addAirPropInScreen={props.addAirPropInScreen}
            removeAirPropInScreen={props.removeAirPropInScreen}
            isChecked={props.state.checkboxScreenSettings[el.sensor_name]}
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
                  props.clearScreen();
               }}
            >
               Очистить экран
            </button>
         </div>
      </div>
   );
};
