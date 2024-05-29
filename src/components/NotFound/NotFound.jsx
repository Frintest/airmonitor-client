import React from "react";
import s from "./NotFound.module.scss";
import { NavLink } from "react-router-dom";

export const NotFound = () => {
   return (
      <p>
         Страница не найдена
         <NavLink to="/" className={s.link}>
            вернуться на главную
         </NavLink>
      </p>
   );
};
