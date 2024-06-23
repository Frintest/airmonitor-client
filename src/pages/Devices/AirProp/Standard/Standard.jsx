import React from "react";
import s from "./Standard.module.scss";

export const Standard = (props) => {
   const getLevelColors = (level) => {
      const fromColor = props.levelColors[level].dark;
      const toColor = props.levelColors[level].light;
      return [fromColor, toColor];
   };

   const standards = props.standards.content;

   const elements = () => {
      return standards.map((item) => {
         const [fromColor, toColor] = getLevelColors(item.level);
         const value = item.level == standards.length ? `${item.value}+` : `${item.value}`;

         return (
            <li className={s.item} key={item.level}>
               <div
                  className={s.blockValue}
                  style={{
                     background: `linear-gradient(0deg, ${fromColor} 0%, ${toColor} 100%)`,
                  }}
               >
                  {value}
               </div>
               <p className={s.desc}>{item.text}</p>
            </li>
         );
      });
   };

   return props.standards.isExist ? (
      <div className={s.standards}>
         <p className={s.standards__source}>*{props.standards.source}</p>
         <ul className={s.standards__list}>{elements()}</ul>
      </div>
   ) : (
      <p className={s.notFount}>Стандарты не предусмотрены</p>
   );
};
