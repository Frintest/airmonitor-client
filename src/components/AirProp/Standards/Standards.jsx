import React from "react";
import s from "./Standards.module.scss";

export const Standards = (props) => {
   const getLevelColors = (level) => {
      const fromColor = props.levelColors[level].dark;
      const toColor = props.levelColors[level].light;
      return [fromColor, toColor];
   };

   const elements = () => {
      return props.standards.content.map((item) => {
         const [fromColor, toColor] = getLevelColors(item.level);
         return (
            <li className={s.item} key={item.level}>
               <div
                  className={s.blockValue}
                  style={{
                     background: `linear-gradient(0deg, ${fromColor} 0%, ${toColor} 100%)`,
                  }}
               >
                  {item.value}
               </div>
               <p className={s.desc}>{item.text}</p>
            </li>
         );
      });
   };

   return (
      props.standards.content && (
         <div className={s.standards}>
            <p className={s.standards__source}>*{props.standards.source}</p>
            <ul className={s.standards__list}>{elements()}</ul>
         </div>
      )
   );
};
