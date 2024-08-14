import React from "react";
import s from "./Button.module.scss";

export const Button = (props) => {
   return (
      <button className={s.btn} onClick={props.onClick} type="button">
         {props.content}
      </button>
   );
};
