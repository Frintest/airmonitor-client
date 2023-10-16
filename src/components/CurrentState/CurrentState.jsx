import React from "react";
import s from "./CurrentState.module.scss";
import StateElement from "../StateElement/StateElement";
import GeneralData from "./GeneralData/GeneralData";

const CurrentState = (props) => {
   React.useEffect(() => {
      props.getLastStateThunk();
   }, []);

   // const stateElements = props.state.stateAir.map(({ sensor_name, ui_name, value }) => {
   //    return <StateElement name={ui_name} value={value} key={sensor_name} />;
   // });

   return (
      <section className={"section " + s.stateSection}>
         <div className={"container " + s.container}>
            <GeneralData />
            <ul className={s.table}>
               <StateElement />
               <StateElement />
               <StateElement />
               <StateElement />
               <StateElement />
               <StateElement />
               <StateElement />
               <StateElement />
            </ul>
         </div>
      </section>
   );
};

export default CurrentState;
