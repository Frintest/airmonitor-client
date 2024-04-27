import React from "react";
import s from "./ScreensControls.module.scss";
import { ScreenSettings } from "./ScreenSettings/ScreenSettings.jsx";
import { ScreensTabs } from "./ScreensTabs/ScreensTabs.jsx";

export const ScreensControls = (props) => {
   const [isVisible, setVisible] = React.useState(false);

   return (
      <>
         <div className={s.wrap}>
            <ScreensTabs
               screens={props.screens}
               setActiveScreen={props.setActiveScreen}
               setInactiveScreen={props.setInactiveScreen}
            />
            {props.activeScreen.isChange && (
               <button
                  className={s.changeScreenBtn + " " + s.item + " " + s.itemActive}
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
            addScreenItem={props.addScreenItem}
            removeScreenItem={props.removeScreenItem}
            activeScreen={props.activeScreen}
            data={props.data}
         />
      </>
   );
};
