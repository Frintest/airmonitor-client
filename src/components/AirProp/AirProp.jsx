import React from "react";
import s from "./AirProp.module.scss";
import { Link } from "react-router-dom";
import { formatText } from "../../utilities/helpers/format-text-airprop";
import { Standards } from "./Standards/Standards.jsx";
import { HistoryChart } from "./HistoryChart/HistoryChart.jsx";

export const AirProp = (props) => {
   React.useEffect(() => {
      props.updateAirStateThunk(0);
   });

   const getAirPropByName = () => {
      return props.data.find((el) => `/${el.sensor_name}` === props.router.location.pathname);
   };
   const currentAirProp = getAirPropByName();

   React.useEffect(() => {
      props.addAirPropHistoryThunk(currentAirProp.sensor_name);
   });

   return (
      <section className={s.airprop}>
         <div className={s.header}>
            <Link to="/" className={s.header__exit}>
               <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" fill="none">
                  <path
                     fill="#0F172A"
                     d="M15.375 6.95H3.598l5.145-5.144a1.063 1.063 0 0 0 0-1.498 1.05 1.05 0 0 0-1.486 0L.308 7.257a1.05 1.05 0 0 0 0 1.486l6.949 6.949a1.05 1.05 0 1 0 1.486-1.487L3.598 9.06h11.777c.58 0 1.055-.475 1.055-1.055s-.475-1.054-1.055-1.054Z"
                  />
               </svg>
            </Link>
            <p className={s.header__title}>{formatText(currentAirProp.ui_name)}</p>
         </div>

         <div className={s.info}>
            <div className={s.maininfo}>
               <div className={s.maininfo__valueWrap}>
                  <p className={s.maininfo__value}>{currentAirProp.value}</p>
                  <span className={s.maininfo__unit}>{formatText(currentAirProp.unit)}</span>
               </div>
               <Standards
                  levelColors={props.levelColors}
                  standards={props.standards[currentAirProp.sensor_name]}
               />
            </div>

            <div className={s.chart}>
               {props.history[currentAirProp.sensor_name] && (
                  <HistoryChart history={props.history} name={currentAirProp.sensor_name} />
               )}
            </div>
         </div>
      </section>
   );
};
