import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout.jsx";
import ScreenContainer from "./components/Screen/ScreenContainer.js";
import AirPropContainer from "./components/AirProp/AirPropContainer.js";
import { NotFound } from "./components/NotFound/NotFound.jsx";

export const App = (props) => {
   const elements = Object.values(props.data).map((item) => {
      return (
         <Route
            path={`${item.sensor_name}`}
            element={<AirPropContainer />}
            key={item.sensor_name}
         />
      );
   });

   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route index element={<ScreenContainer />} />
               <Route path="*" element={<NotFound />} />
               {elements}
            </Route>
         </Routes>
      </BrowserRouter>
   );
};
