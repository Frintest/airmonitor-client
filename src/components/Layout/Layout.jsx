import React from "react";
import s from "./Layout.module.scss";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header.jsx";
import ScreensControlsContainer from "../ScreensControls/ScreensControlsContainer.js";

export const Layout = () => {
   return (
      <>
         <Header />
         <div className={s.container}>
            <div>
               <ScreensControlsContainer />
               <Outlet />
            </div>
         </div>
      </>
   );
};
