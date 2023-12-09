import React from "react";
import "./NotFound.module.scss";
import { Link } from "react-router-dom";

export const NotFound = () => {
   return (
      <p>
         Страница не найдена <Link to="/">вернуться на главную</Link>
      </p>
   );
};
