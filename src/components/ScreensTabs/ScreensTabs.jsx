import React from "react";
import s from "./ScreensTabs.module.scss";
import { ScreenSettings } from "./ScreenSettings/ScreenSettings.jsx";

export const ScreensTabs = (props) => {
   const [isVisible, setVisible] = React.useState(false);

   const tabs = props.state.screens.map((el, index) => {
      const TabClick = () => {
         props.updateAirStateThunk(index);

         if (!el.isExists) {
            props.CreateScreenThunk(index);
         }

         if (el.isExists && !el.isActive) {
            props.ToggleScreensThunk(index);
         }
      };

      return (
         <li className={s.itemWrap} key={el.id} onClick={TabClick}>
            <button
               className={
                  s.item +
                  (el.id === 0 ? " " + s.itemMain : "") +
                  (!el.isExists ? " " + s.itemNotExists : "") +
                  (el.isActive ? " " + s.itemActive : "")
               }
            >
               {el.isExists && el.value}
            </button>
         </li>
      );
   });

   return (
      <>
         <div className={s.wrap}>
            <ul className={s.list}>{tabs}</ul>
            {props.state.activeScreenIndex !== 0 && (
               <button
                  className={
                     s.changeScreenBtn + " " + s.item + " " + s.itemMain + " " + s.itemActive
                  }
                  onClick={() => setVisible(true)}
               >
                  Изменить экран
               </button>
            )}
         </div>
         <ScreenSettings
            isVisible={isVisible}
            setVisible={() => setVisible(false)}
            RemoveScreenThunk={props.RemoveScreenThunk}
         />
      </>
   );
};
