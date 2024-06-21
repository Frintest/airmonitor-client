import React from "react";
import s from "./Layout.module.scss";
import { Outlet } from "react-router-dom";
import HeaderContainer from "../Header/HeaderContainer.js";
import ScreensControlsContainer from "../ScreensControls/ScreensControlsContainer.js";

export const Layout = () => {
   return (
      <>
         <HeaderContainer />
         <div className={s.container}>
            <div>
               <ScreensControlsContainer />
               <Outlet />
            </div>
         </div>
      </>
   );
};
