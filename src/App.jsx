import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout/Layout.jsx";
import DevicesContainer from "./pages/Devices/DevicesContainer.js";
import { Help } from "./pages/Help/Help.jsx";
import { NotFound } from "./pages/NotFound/NotFound.jsx";

export const App = (props) => {
   React.useEffect(() => {
      props.updateAirStateThunk();
      props.getStandardsThunk();
   });

   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route path="devices/*" element={<DevicesContainer />} />
               <Route path="help" element={<Help />} />
               <Route path="*" element={<NotFound />} />
            </Route>
         </Routes>
      </BrowserRouter>
   );
};
