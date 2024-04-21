import React from "react";
import { Link } from "react-router-dom";
import s from "./ScreenItem.module.scss";
import { formatText } from "../../../utilities/helpers/format-text-airprop.js";

export const ScreenItem = (props) => {
   return (
      <Link
         to={`/${props.el.sensor_name}`}
         className={s.element}
      >
         <div>
            <span className={s.name}>{formatText(props.el.ui_name)}</span>
            <span className={s.status}>Normal</span>
         </div>

         <p className={s.value}>
            {props.el.value}
            <span className={s.unit}>{formatText(props.el.unit)}</span>
         </p>
      </Link>
   );
};
