import React from "react";
import s from "./ScreensTabs.module.scss";
import { ScreenSettings } from "./ScreenSettings/ScreenSettings.jsx";

export const ScreensTabs = (props) => {
   const [isVisible, setVisible] = React.useState(false);
   React.useEffect(() => {
      props.updateAirStateThunk(0);
   });

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

   return (
      <>
         <div className={s.wrap}>
            <ul className={s.list}>{tabs}</ul>
            {props.activeScreenIndex !== 0 && (
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
            clearScreen={props.clearScreen}
            addAirPropInScreen={props.addAirPropInScreen}
            removeAirPropInScreen={props.removeAirPropInScreen}
            checkboxScreenSettings={props.checkboxScreenSettings}
            data={props.data}
         />
      </>
   );
};
