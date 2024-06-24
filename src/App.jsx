import React from "react";
import { lazily } from "react-lazily";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout/Layout.jsx";
import DevicesContainer from "./pages/Devices/DevicesContainer.js";
const { Help } = lazily(() => import("./pages/Help/Help.jsx"));
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
               <Route
                  path="help"
                  element={
                     <React.Suspense fallback={<div>Loading...</div>}>
                        <Help />
                     </React.Suspense>
                  }
               />
               <Route path="*" element={<NotFound />} />
            </Route>
         </Routes>
      </BrowserRouter>
   );
};
