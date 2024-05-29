import React from "react";
import { Link } from "react-router-dom";
import s from "./ScreenItem.module.scss";
import { formatText } from "../../../utilities/helpers/format-text-airprop.js";

export const ScreenItem = (props) => {
   const airItem = props.airItem;

   return (
      <Link to={`/${airItem.sensor_name}`} className={s.element}>
         <div>
            <span className={s.name}>{formatText(airItem.ui_name)}</span>
            <span className={s.status}>Normal</span>
         </div>

         <p className={s.value}>
            {airItem.value}
            <span className={s.unit}>{formatText(airItem.unit)}</span>
         </p>
      </Link>
   );
};
