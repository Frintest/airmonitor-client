import React from "react";
import s from "./Standards.module.scss";

export const Standards = (props) => {
   const getLevelColors = (level) => {
      const fromColor = props.levelColors[level].dark;
      const toColor = props.levelColors[level].light;
      return [fromColor, toColor];
   };

   const elements = () => {
      return props.standards.content.map((el) => {
         const [fromColor, toColor] = getLevelColors(el.level);
         return (
            <li className={s.maininfo__standardsItemWrap} key={el.level}>
               <div className={s.maininfo__standardsItem}>
                  <div
                     className={s.maininfo__standardsValue}
                     style={{
                        background: `linear-gradient(0deg, ${fromColor} 0%, ${toColor} 100%)`,
                     }}
                  >
                     {el.value}
                  </div>
                  <p className={s.maininfo__standardsDesc}>{el.text}</p>
               </div>
            </li>
         );
      });
   };

   return (
      props.standards.content && (
         <div className={s.maininfo__standards}>
            <p className={s.maininfo__standardsSource}>*{props.standards.source}</p>
            <ul className={s.maininfo__standardsList}>{elements()}</ul>
         </div>
      )
   );
};
