import React from "react";
import "./Layout.module.scss";
import ScreensTabsContainer from "../ScreensTabs/ScreensTabsContainer.js";
import { Outlet } from "react-router-dom";

export const Layout = () => {
   return (
      <>
         <ScreensTabsContainer />
         <Outlet />
      </>
   );
};
