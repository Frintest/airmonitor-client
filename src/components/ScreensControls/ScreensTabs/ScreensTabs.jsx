import React from "react";
import s from "./ScreensTabs.module.scss";

export const ScreensTabs = (props) => {
   const tabs = props.screens.map((el, index) => {
      const TabClick = () => {
         props.updateAirStateThunk(index);

         if (!el.isActive) {
            props.toggleScreens(index);
         }
      };

      return (
         <li className={s.itemWrap} key={el.id} onClick={TabClick}>
            <button
               className={
                  s.item +
                  (el.id === 0 ? " " + s.itemMain : "") +
                  (el.isActive ? " " + s.itemActive : "")
               }
            >
               {el.value}
            </button>
         </li>
      );
   });

   return <ul className={s.list}>{tabs}</ul>;
};
