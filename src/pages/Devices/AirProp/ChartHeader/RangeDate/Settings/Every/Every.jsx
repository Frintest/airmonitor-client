import React from "react";
import s from "./Every.module.scss";

export const Every = (props) => {
   const calcMax = (name) => {
      let max = 0;

      if (name === "years") {
         max = 20;
      }
      if (name === "month") {
         max = 11;
      }
      if (name === "days") {
         max = 365; // todo
      }
      if (name === "hours") {
         max = 23;
      }
      if (name === "minutes") {
         max = 59;
      }

      return max;
   };

   const calcMin = (name) => {
      let min = 0;

      if (name === "minutes") {
         min = 2;
      } else {
         min = 0;
      }

      return min;
   };

   const elements = Object.values(props.every).map((item) => {
      return (
         item.isExistUI && (
            <li className={s.item} key={item.ui_name}>
               <label className={s.item__label}>
                  <span className={s.item__title}>{item.ui_name}</span>
                  <input
                     type="number"
                     value={item.value}
                     onChange={(evt) => {
                        props.updateEveryValue(item.name, Number(evt.target.value));
                        props.updateEveryExist(item.name, Number(evt.target.value));
                     }}
                     min={calcMin(item.name)}
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
