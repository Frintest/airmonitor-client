import React from "react";
import s from "./UpdateData.module.scss";

export const UpdateData = (props) => {
   return (
      <p className={s.text} style={{ color: props.textColor }}>
         Обновление данных:
         <span className={s.time} style={{ color: props.timeColor }}>
            {"45 сек."} назад
         </span>
      </p>
   );
};
