// import { Routes, Route } from "react-router-dom";
import React from "react";
import ScreensTabsContainer from "./components/ScreensTabs/ScreensTabsContainer.js";
import AirStateContainer from "./components/AirState/AirStateContainer.js";

const App = () => {
   return (
      <>
         {/* <Routes>
         	<Route path="/" element={<StateAirContainer />} />
         </Routes> */}
         <ScreensTabsContainer />
         <AirStateContainer />
      </>
   );
};

export default App;
