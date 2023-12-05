import React from "react";
import { Link } from "react-router-dom";
import s from "./AirStateElement.module.scss";
import { formatText } from "../../../redux/utilities/helpers/format-text-airprop";

const AirStateElement = (props) => {
   return (
      <Link to={`/${props.sensor_name}`} className={s.element}>
         <div>
            <span className={s.name}>{formatText(props.ui_name)}</span>
            <span className={s.status}>Normal</span>
         </div>

         <p className={s.value}>
            {props.value}
            <span className={s.unit}>{formatText(props.unit)}</span>
         </p>
      </Link>
   );
};

export default AirStateElement;
