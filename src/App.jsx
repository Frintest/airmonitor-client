import React from "react";
import { Routes, Route } from "react-router-dom";
import ScreensTabsContainer from "./components/ScreensTabs/ScreensTabsContainer.js";
import AirStateContainer from "./components/AirState/AirStateContainer.js";
import AirPropContainer from "./components/AirProp/AirPropContainer.js";

const App = () => {
   return (
      <>
         <ScreensTabsContainer />
         <AirStateContainer />
         <Routes>
            <Route path="/" element={<AirStateContainer />} />
            <Route path="/pm1" element={<AirPropContainer />} />
         </Routes>
      </>
   );
};

export default App;
