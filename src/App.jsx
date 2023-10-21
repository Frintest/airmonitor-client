import { Routes, Route } from "react-router-dom";
import ScreensTabsContainer from "./components/ScreensTabs/ScreensTabsContainer";
import StateAirContainer from "./components/StateAir/StateAirContainer";

const App = () => {
   return (
      <>
         {/* <Routes> */}
         {/* <Route path="/" element={<StateAirContainer />} /> */}
         {/* <Route path="/1" element={<StateAirContainer />} /> */}
         {/* </Routes> */}
         <ScreensTabsContainer />
         <StateAirContainer />
      </>
   );
};

export default App;
