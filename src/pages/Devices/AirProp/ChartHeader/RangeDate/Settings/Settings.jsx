import React from "react";
import s from "./Settings.module.scss";
import { Popup } from "../../../../../../components/Popup/Popup.jsx";
import { QuickRange } from "./QuickRange/QuickRange.jsx";
import { Button } from "../../../../../../components/Button/Button.jsx";

export const Settings = (props) => {
   return (
      <Popup title={"Диапазон дат/времени"} isVisible={props.isVisible} onClose={props.onClose}>
         <div className={s.settings__body}>
            <QuickRange
               setActiveQuickRange={props.setActiveQuickRange}
               quickRange={props.quickRange}
            />
            <div className={s.settings__calendars}>Calendars</div>
         </div>

         <div className={s.settings__buttons}>
            <button className={s.settings__closeBtn} onClick={props.onClose}>
               Отмена
            </button>
            <Button content="Сохранить" onClick={props.onClose} />
         </div>
      </Popup>
   );
};
