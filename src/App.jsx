// import { Routes, Route } from "react-router-dom";
import React from "react";
import ScreensTabsContainer from "./components/ScreensTabs/ScreensTabsContainer.js";
import AirStateContainer from "./components/AirState/AirStateContainer.js";
import ScreenSettingsContainer from "./components/ScreensTabs/ScreenSettings/ScreenSettingsContainer.js";

const App = () => {
   return (
      <>
         {/* <Routes>
         	<Route path="/" element={<StateAirContainer />} />
         </Routes> */}
			<ScreenSettingsContainer></ScreenSettingsContainer>
         <ScreensTabsContainer />
         <AirStateContainer />
      </>
   );
};

export default App;
