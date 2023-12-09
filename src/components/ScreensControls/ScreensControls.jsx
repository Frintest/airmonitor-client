import React from "react";
import s from "./ScreensControls.module.scss";
import { ScreenSettings } from "./ScreenSettings/ScreenSettings.jsx";
import { ScreensTabs } from "./ScreensTabs/ScreensTabs.jsx";

export const ScreensControls = (props) => {
   const [isVisible, setVisible] = React.useState(false);
   React.useEffect(() => {
      props.updateAirStateThunk(0);
   });

   return (
      <>
         <div className={s.wrap}>
            <ScreensTabs
               screens={props.screens}
               updateAirStateThunk={props.updateAirStateThunk}
               toggleScreens={props.toggleScreens}
            />
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
