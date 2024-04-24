import React from "react";
import s from "./ScreensTabs.module.scss";

export const ScreensTabs = (props) => {
   const tabs = props.screens.map((screen) => {
      const TabClick = () => {
         props.updateAirStateThunk(screen.id);
         if (!screen.isActive) {
            props.setActiveScreen(screen.id);
         }
      };

      return (
         <li className={s.itemWrap} key={screen.id} onClick={TabClick}>
            <button
               className={
                  s.item +
                  (screen.id === 0 ? " " + s.itemMain : "") +
                  (screen.isActive ? " " + s.itemActive : "")
               }
            >
               {screen.value}
            </button>
         </li>
      );
   });

   return <ul className={s.list}>{tabs}</ul>;
};
