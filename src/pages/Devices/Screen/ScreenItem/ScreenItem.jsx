import React from "react";
import { Link } from "react-router-dom";
import s from "./ScreenItem.module.scss";
import { formatText } from "../../../../utilities/helpers/format-text-airprop.js";

export const ScreenItem = (props) => {
   React.useEffect(() => {
      props.setActiveQuickRange(0);
   }, []);

   const airItem = props.airItem;

   return (
      <Link to={`/devices/${airItem.sensor_name}`} className={s.element}>
         <span className={s.name}>{formatText(airItem.ui_name)}</span>

         <p className={s.value}>
            {airItem.value}
            <span className={s.unit}>{formatText(airItem.unit)}</span>
         </p>

         <div className={s.status}>Норма</div>

         <div className={s.elementHover}>
            <p className={s.elementHover__more}>Подробнее</p>
            <div className={s.elementHover__status}></div>
         </div>
      </Link>
   );
};
