import React from "react";
import { Routes, Route } from "react-router-dom";
import ScreensTabsContainer from "./components/ScreensTabs/ScreensTabsContainer.js";
import AirStateContainer from "./components/AirState/AirStateContainer.js";
import AirPropContainer from "./components/AirProp/AirPropContainer.js";

export const App = (props) => {
   const getAirPropsRoutes = () => {
      let airPropsRoutes = [];
      if (props.state.data) {
         airPropsRoutes = props.state.data.map((el) => {
            return (
               <Route
                  path={`${el.sensor_name}`}
                  element={<AirPropContainer />}
                  key={el.sensor_name}
               />
            );
         });
      }
      return airPropsRoutes;
   };

   return (
      <>
         <ScreensTabsContainer />
         <Routes>
            <Route path="/" element={<AirStateContainer />} />
            {getAirPropsRoutes()}
         </Routes>
      </>
   );
};
