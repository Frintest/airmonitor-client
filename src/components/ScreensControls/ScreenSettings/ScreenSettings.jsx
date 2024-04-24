import React from "react";
import s from "./ScreenSettings.module.scss";
import { ScreenSettingsElement } from "./ScreenSettingsElement/ScreenSettingsElement.jsx";

export const ScreenSettings = (props) => {
   const elements = props.data.map((el) => {
      const isChecked = props.activeScreen.elements.some((item) => {
         return el.sensor_name === item.sensor_name;
      });

      return (
         <ScreenSettingsElement
            ui_name={el.ui_name}
            sensor_name={el.sensor_name}
            addScreenItem={props.addScreenItem}
            removeScreenItem={props.removeScreenItem}
            isChecked={isChecked}
            key={el.sensor_name}
         />
      );
   });

   return (
      <div className={s.wrap + (props.isVisible ? " " + s.visible : "")}>
         <div className={s.block}>
            <div className={s.header}>
               <p className={s.heading}>Компоненты</p>
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
