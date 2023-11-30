import React from "react";
import { Link } from "react-router-dom";
import s from "./AirStateElement.module.scss";

const AirStateElement = (props) => {
   const formatText = (text) => {
      const subBeginIndex = text.indexOf("<sub>");
      const supBeginIndex = text.indexOf("<sup>");
      let mainText = text,
         indexTag = "";
      if (subBeginIndex !== -1) {
         mainText = text.slice(0, subBeginIndex);
         indexTag = <sub>{text.slice(subBeginIndex + 5)}</sub>;
      } else if (supBeginIndex !== -1) {
         mainText = text.slice(0, supBeginIndex);
         indexTag = <sup>{text.slice(supBeginIndex + 5)}</sup>;
      }

      return [mainText, indexTag];
   };

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
