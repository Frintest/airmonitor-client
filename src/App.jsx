import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout.jsx";
import AirStateContainer from "./components/AirState/AirStateContainer.js";
import AirPropContainer from "./components/AirProp/AirPropContainer.js";
import { NotFound } from "./components/NotFound/NotFound.jsx";

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
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route index element={<AirStateContainer />} />
               <Route path="*" element={<NotFound />} />
					{/* TODO NotFound load */}
               {getAirPropsRoutes()}
            </Route>
         </Routes>
      </>
   );
};
