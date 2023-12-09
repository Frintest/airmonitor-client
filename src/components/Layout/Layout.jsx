import React from "react";
import "./Layout.module.scss";
import ScreensControlsContainer from "../ScreensControls/ScreensControlsContainer.js";
import { Outlet } from "react-router-dom";

export const Layout = () => {
   return (
      <>
         <ScreensControlsContainer />
         <Outlet />
      </>
   );
};
