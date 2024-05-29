import React from "react";
import s from "./ScreensTabs.module.scss";

export const ScreensTabs = (props) => {
   const tabs = Object.values(props.screens).map((screen) => {
      const TabClick = () => {
         if (!screen.isActive) {
            props.setActiveScreen(screen.id);
         }
      };

      return (
         <li className={s.itemWrap} onClick={TabClick} key={screen.id}>
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
