import React from "react";
import s from "./Settings.module.scss";
import { Popup } from "../../../../../../components/Popup/Popup.jsx";
import { QuickRange } from "./QuickRange/QuickRange.jsx";
import { DatePicker } from "./DatePicker/DatePicker.jsx";
import { Button } from "../../../../../../components/Button/Button.jsx";

export const Settings = (props) => {
   return (
      <Popup
         title={"Диапазон дат/времени"}
         isVisible={props.isVisible}
         onClose={() => {
            props.onClose();
            props.setActiveQuickRange(0);
         }}
      >
         <div className={s.settings__body}>
            <QuickRange
               setActiveQuickRange={props.setActiveQuickRange}
               quickRange={props.quickRange}
            />
            {props.isCustomRange && (
               <div className={s.settings__calendars}>
                  <DatePicker textPicker="С" date={props.info.firstDate} airInfo={props.airInfo} />
                  <DatePicker textPicker="До" date={props.info.lastDate} airInfo={props.airInfo} />
               </div>
            )}
         </div>

         <div className={s.settings__buttons}>
            <button
               className={s.settings__closeBtn}
               onClick={() => {
                  props.onClose();
                  props.setActiveQuickRange(0);
               }}
            >
               Отмена
            </button>
            <Button content="Сохранить" onClick={props.onClose} />
         </div>
      </Popup>
   );
};
