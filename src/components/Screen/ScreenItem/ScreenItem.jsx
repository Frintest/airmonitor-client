import React from "react";
import { Link } from "react-router-dom";
import s from "./ScreenItem.module.scss";
import { formatText } from "../../../utilities/helpers/format-text-airprop.js";

export const ScreenItem = (props) => {
   const itemName = props.item.sensor_name;

   return (
      <Link
         to={`/${itemName}`}
         className={s.element}
      >
         <div>
            <span className={s.name}>{formatText(props.item.ui_name)}</span>
            <span className={s.status}>Normal</span>
         </div>

         <p className={s.value}>
            {props.item.value}
            <span className={s.unit}>{formatText(props.item.unit)}</span>
         </p>
      </Link>
   );
};
