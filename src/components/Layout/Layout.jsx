import React from "react";
import "./Layout.module.scss";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header.jsx";
import ScreensControlsContainer from "../ScreensControls/ScreensControlsContainer.js";

export const Layout = () => {
   return (
      <>
         <Header />
         <ScreensControlsContainer />
         <Outlet />
      </>
   );
};
