import React from "react";
import s from "./AirProp.module.scss";
import { Link } from "react-router-dom";
import { formatText } from "../../redux/utilities/helpers/format-text-airprop";

export const AirProp = (props) => {
   React.useEffect(() => {
      props.updateAirStateThunk(0);
   });

   const getAirPropByName = () => {
      const el = props.state.data.find(
         (el) => `/${el.sensor_name}` === props.router.location.pathname
      );

      if (el) {
         // console.log(el.ui_name); // TODO это хороший индикатор того, что нужно обновлять state.data если данные изменились, а не каждые 3 секунды
         return el;
      }
   };

   const getColorsLevel = (level) => {
      const fromColor = props.state.levelColors[level].darkColor;
      const toColor = props.state.levelColors[level].lightColor;
      return [fromColor, toColor];
   };

   const airprop = getAirPropByName();
   const standardsState = props.state.standards[airprop.sensor_name];
   const source = standardsState.source;

   const getStandardsElements = () => {
      return standardsState.content.map((el) => {
         const [fromColor, toColor] = getColorsLevel(el.level);
         return (
            <div className={s.maininfo__standardsItemWrap}>
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
            <p className={s.header__title}>{formatText(airprop.ui_name)}</p>
         </div>

         <div className={s.maininfo}>
            <div className={s.maininfo__valueWrap}>
               <p className={s.maininfo__value}>{airprop.value}</p>
               <span className={s.maininfo__unit}>{formatText(airprop.unit)}</span>
            </div>
            {standardsState.content && (
               <div className={s.maininfo__standards}>
                  <p className={s.maininfo__standardsSource}>*{source}</p>
                  <div className={s.maininfo__standardsList}>{getStandardsElements()}</div>
               </div>
            )}
         </div>
      </section>
   );
};
