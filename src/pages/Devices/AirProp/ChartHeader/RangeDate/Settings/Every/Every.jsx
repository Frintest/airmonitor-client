import React from "react";
import s from "./Every.module.scss";

export const Every = (props) => {
   const calcMax = (name) => {
      let max = 0;

      if (name === "years") {
         max = 20;
      }
      if (name === "month") {
         max = 12;
      }
      if (name === "days") {
         max = 366;
      }
      if (name === "hours") {
         max = 24;
      }
      if (name === "minutes") {
         max = 60;
      }

      return max;
   };

   const elements = Object.values(props.every).map((item) => {
      return (
         item.isExist && (
            <li className={s.item} key={item.ui_name}>
               <label className={s.item__label}>
                  <span className={s.item__title}>{item.ui_name}</span>
                  <input
                     type="number"
                     value={item.value}
                     onChange={(evt) => {
                        props.updateEveryValue(item.name, evt.target.value);
                        props.updateEveryExist(item.name, evt.target.value);
                     }}
                     min="0"
                     max={calcMax(item.name)}
                     className={s.item__input}
                  />
               </label>
            </li>
         )
      );
   });

   return (
      <div className={s.every + (!props.isCustomRange ? " " + s.every_notCustom : "")}>
         <p className={s.every__title}>Интервал между записями</p>
         <ul
            className={s.every__list + (!props.isCustomRange ? " " + s.every__list_notCustom : "")}
         >
            {elements}
         </ul>
      </div>
   );
};
