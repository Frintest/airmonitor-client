import React from "react";
import s from "./AirProp.module.scss";
import { Link } from "react-router-dom";
import { formatText } from "../../utilities/helpers/format-text-airprop";
import { HistoryChart } from "./HistoryChart/HistoryChart.jsx";

export const AirProp = (props) => {
   React.useEffect(() => {
      props.updateAirStateThunk(0);
   });

   const getAirPropByName = () => {
      return props.state.data.find((el) => `/${el.sensor_name}` === props.router.location.pathname);
   };
   const currentAirProp = getAirPropByName();

   React.useEffect(() => {
      props.addAirPropHistoryThunk(currentAirProp.sensor_name);
   });

   const getColorsLevel = (level) => {
      const fromColor = props.state.levelColors[level].darkColor;
      const toColor = props.state.levelColors[level].lightColor;
      return [fromColor, toColor];
   };

   const standardsState = props.state.standards[currentAirProp.sensor_name];

   const getStandardsElements = () => {
      return standardsState.content.map((el) => {
         const [fromColor, toColor] = getColorsLevel(el.level);
         return (
            <div className={s.maininfo__standardsItemWrap} key={el.level}>
               <div className={s.maininfo__standardsItem}>
                  <div
                     className={s.maininfo__standardsValue}
                     style={{
                        background: `linear-gradient(0deg, ${fromColor} 0%, ${toColor} 100%)`,
                     }}
                  >
                     {el.value}
                  </div>
                  <p className={s.maininfo__standardsDesc}>{el.desc}</p>
               </div>
            </div>
         );
      });
   };

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
               {standardsState.content && (
                  <div className={s.maininfo__standards}>
                     <p className={s.maininfo__standardsSource}>*{standardsState.source}</p>
                     <div className={s.maininfo__standardsList}>{getStandardsElements()}</div>
                  </div>
               )}
            </div>

            <div className={s.chart}>
               {props.state.airPropHistory[currentAirProp.sensor_name] && (
                  <HistoryChart
                     history={props.state.airPropHistory}
                     name={currentAirProp.sensor_name}
                  />
               )}
            </div>
         </div>
      </section>
   );
};
