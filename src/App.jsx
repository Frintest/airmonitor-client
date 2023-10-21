// import { Routes, Route } from "react-router-dom";
import React from "react";
import ScreensTabsContainer from "./components/ScreensTabs/ScreensTabsContainer.js";
import StateAirContainer from "./components/StateAir/StateAirContainer.js";

const App = () => {
   return (
      <>
         {/* <Routes>
         	<Route path="/" element={<StateAirContainer />} />
         </Routes> */}
         <ScreensTabsContainer />
         <StateAirContainer />
      </>
   );
};

export default App;
