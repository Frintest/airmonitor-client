import React from "react";
import s from "./ScreensTabs.module.scss";

export const ScreensTabs = (props) => {
   const tabs = props.state.screens.map((el, index) => {
      const tabAdd = index > 0 && !el.isExists && props.state.screens[index - 1].isExists;

      const TabClick = () => {
			props.updateAirStateThunk(index);

         if (el.isExists && !el.isActive) {
            props.ToggleScreensThunk(index);
         }
         if (tabAdd) {
            props.CreateScreenThunk(index);
         }
      };

      return (
         <li
            className={
               s.item +
               (el.id == 0 ? " " + s.Main : "") +
               (!el.isExists ? " " + s.NotExists : "") +
               (el.isActive ? " " + s.Active : "") +
               (tabAdd ? " " + s.Add : "")
            }
            key={el.id}
            onClick={TabClick}
         >
            {el.isExists && el.value}
         </li>
      );
   });

   return <ul className={s.list}>{tabs}</ul>;
};
