import React from "react";
import s from "./Devices.module.scss";
import ScreensControlsContainer from "./ScreensControls/ScreensControlsContainer.js";
import ScreenContainer from "./Screen/ScreenContainer.js";
import AirPropContainer from "./AirProp/AirPropContainer.js";
import { Routes, Route } from "react-router-dom";

export const Devices = (props) => {
   React.useEffect(() => {
      props.updateAirStateThunk();
      props.getStandardsThunk();
   });

   const airPropRoutes = Object.values(props.data).map((item) => {
      return (
         <Route
            path={`/${item.sensor_name}`}
            element={<AirPropContainer />}
            key={item.sensor_name}
         />
      );
   });

   return (
      <div className={s.container}>
         <Routes>
            <Route
               index
               element={
                  <div>
                     <ScreensControlsContainer />
                     <ScreenContainer />
                  </div>
               }
            />
            {airPropRoutes}
         </Routes>
      </div>
   );
};
