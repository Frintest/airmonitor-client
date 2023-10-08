import React from "react";
import s from "./CurrentState.module.scss";
import StateElement from "../StateElement/StateElement";

const CurrentState = (props) => {
   React.useEffect(() => {
      // props.getLastStateThunk();
   }, []);

   // const stateElements = props.state.stateAir.map(({ sensor_name, ui_name, value }) => {
   //    return <StateElement name={ui_name} value={value} key={sensor_name} />;
   // });

   return (
      <table className={s.container}>
         <tr>
            <StateElement />
            <StateElement />
            <StateElement />
            <StateElement />
         </tr>
         <tr>
            <StateElement />
            <StateElement />
            <StateElement />
            <StateElement />
         </tr>
      </table>
   );
};

export default CurrentState;
