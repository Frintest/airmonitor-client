import React from "react";
import s from "./Devices.module.scss";
import ScreensControlsContainer from "./ScreensControls/ScreensControlsContainer.js";
import ScreenContainer from "./Screen/ScreenContainer.js";
import AirPropContainer from "./AirProp/AirPropContainer.js";
import { Routes, Route } from "react-router-dom";
import { UpdateData } from "./UpdateData/UpdateData.jsx";

export const Devices = (props) => {
   React.useEffect(() => {
      props.updateAirStateThunk();
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
      <Routes>
         <Route
            index
            element={
               <div className={s.container}>
                  <div>
                     <div className={s.screensControls}>
                        <ScreensControlsContainer />
                        <UpdateData textColor="#fff" timeColor="#cbd5e1" />
                     </div>

                     <ScreenContainer />
                  </div>
               </div>
            }
         />

         {airPropRoutes}
      </Routes>
   );
};
