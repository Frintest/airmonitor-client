import React from "react";
import s from "./Standards.module.scss";
import { formatText } from "../../../utilities/helpers/format-text-airprop.js";

export const Standards = React.memo((props) => {
   const getColorsLevel = (level) => {
      const fromColor = props.levelColors[level].darkColor;
      const toColor = props.levelColors[level].lightColor;
      return [fromColor, toColor];
   };

   const standardsState = props.standards[props.currentAirProp.sensor_name];

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
      <div className={s.maininfo}>
         <div className={s.maininfo__valueWrap}>
            <p className={s.maininfo__value}>{props.currentAirProp.value}</p>
            <span className={s.maininfo__unit}>{formatText(props.currentAirProp.unit)}</span>
         </div>
         {standardsState.content && (
            <div className={s.maininfo__standards}>
               <p className={s.maininfo__standardsSource}>*{standardsState.source}</p>
               <div className={s.maininfo__standardsList}>{getStandardsElements()}</div>
            </div>
         )}
      </div>
   );
});
