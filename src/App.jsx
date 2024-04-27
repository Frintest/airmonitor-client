import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout.jsx";
import ScreenContainer from "./components/Screen/ScreenContainer.js";
import AirPropContainer from "./components/AirProp/AirPropContainer.js";
import { NotFound } from "./components/NotFound/NotFound.jsx";

export const App = (props) => {
   let elements = Object.values(props.state.data).map((item) => {
      return (
         <Route
            path={`${item.sensor_name}`}
            element={<AirPropContainer />}
            key={item.sensor_name}
         />
      );
   });

   return (
      <>
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route index element={<ScreenContainer />} />
               <Route path="*" element={<NotFound />} />
               {/* TODO NotFound load */}
               {elements}
            </Route>
         </Routes>
      </>
   );
};
