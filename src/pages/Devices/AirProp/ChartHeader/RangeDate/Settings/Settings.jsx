import React from "react";
import s from "./Settings.module.scss";
import { Popup } from "../../../../../../components/Popup/Popup.jsx";
import { QuickRange } from "./QuickRange/QuickRange.jsx";
import { DatePicker } from "./DatePicker/DatePicker.jsx";
import { Every } from "./Every/Every.jsx";
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
         <div
            className={
               s.settings__body + (!props.isCustomRange ? " " + s.settings__body_notCustom : "")
            }
         >
            <div className={s.settings__range}>
               <QuickRange
                  quickRange={props.quickRange}
                  setActiveQuickRange={props.setActiveQuickRange}
               />

               {props.isCustomRange && (
                  <div className={s.settings__calendars}>
                     <DatePicker textPicker="С" date={props.date.from} airInfo={props.airInfo} />
                     <DatePicker textPicker="До" date={props.date.to} airInfo={props.airInfo} />
                  </div>
               )}
            </div>

            <Every
               every={props.every}
               isCustomRange={props.isCustomRange}
               updateEveryValue={props.updateEveryValue}
               updateEveryExist={props.updateEveryExist}
            />
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
            <Button
               content="Сохранить"
               onClick={() => {
                  props.onClose();
                  const name = props.sensor_name;
                  const range = props.activeRange.name;
                  const date = props.date;
                  const every = props.every;
                  props.sendRangeInfoThunk(name, range, date, every);
               }}
            />
         </div>
      </Popup>
   );
};
