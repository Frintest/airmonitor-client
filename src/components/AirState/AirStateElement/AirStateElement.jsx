import React from "react";
import s from "./AirStateElement.module.scss";

const AirStateElement = (props) => {
   return (
      <div className={s.element}>
         <div>
            <span className={s.name}>{props.name}</span>
            <span className={s.status}>Normal</span>
         </div>

         <p className={s.value}>
            {props.value}
            <span className={s.unit}>{props.unit}</span>
         </p>
      </div>
   );
};

export default AirStateElement;
