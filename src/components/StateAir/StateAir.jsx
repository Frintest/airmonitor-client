import React from "react";
import StateAirElement from "./StateAirElement/StateAirElement";
import s from "./StateAir.module.scss";

const StateAir = (props) => {
   // React.useEffect(() => {
   //    let a = props.getLastStateThunk();
	// 	console.log(a);
   // }, []);

   const stateElements = props.screensTabsState.screens[
      props.screensTabsState.activeScreenIndex
   ].elements.map((el) => {
      const { sensor_name, ui_name, value, unit } = el;

      return <StateAirElement name={ui_name} value={value} unit={unit} key={sensor_name} />;
   });

   // const stateElements = props.screensTabsState.screens.map((el) => {
   //  const { sensor_name, ui_name, value, unit } = el;

   //    return <StateAirElement name={ui_name} value={value} unit={unit} key={sensor_name} />;
   // });

   return <div className={s.wrap}>{stateElements}</div>;
};

export default StateAir;
