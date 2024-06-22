import React from "react";
import s from "./ScreenSettings.module.scss";
import { ScreenSettingsElement } from "./ScreenSettingsElement/ScreenSettingsElement.jsx";

export const ScreenSettings = (props) => {
   const elements = Object.values(props.airState).map((item) => {
      const airItem = props.airState[item.sensor_name];
      const isChecked = props.screen.elements[item.sensor_name] !== undefined;
      return (
         <ScreenSettingsElement
            airItem={airItem}
            addScreenItem={props.addScreenItem}
            removeScreenItem={props.removeScreenItem}
            isChecked={isChecked}
            key={item.sensor_name}
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
