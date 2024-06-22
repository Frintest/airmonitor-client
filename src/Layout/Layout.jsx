import React from "react";
import s from "./Layout.module.scss";
import { Outlet } from "react-router-dom";
import HeaderContainer from "./Header/HeaderContainer.js";

export const Layout = () => {
   return (
      <>
         <HeaderContainer />
			<Outlet />
      </>
   );
};
