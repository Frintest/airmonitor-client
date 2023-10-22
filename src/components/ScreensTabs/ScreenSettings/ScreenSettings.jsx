import React from "react";
import s from "./ScreenSettings.module.scss";
import { ScreenSettingsElement } from "./ScreenSettingsElement/ScreenSettingsElement.jsx";

export const ScreenSettings = (props) => {
   return (
      <div className={s.wrap + (props.isVisible ? " " + s.visible : "")}>
         <div className={s.header}>
            <p className={s.heading}>Блоки</p>
            <button className={s.closeBtn} onClick={() => props.setVisible(false)}></button>
         </div>
         {}
         <button
            className={s.removeBtn}
            onClick={() => {
               props.setVisible(false);
               props.RemoveScreenThunk();
            }}
         >
            Удалить экран
         </button>
      </div>
   );
};
