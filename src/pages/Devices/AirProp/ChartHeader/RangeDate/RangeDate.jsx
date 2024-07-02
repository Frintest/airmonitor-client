import React from "react";
import s from "./RangeDate.module.scss";
import { Settings } from "./Settings/Settings.jsx";

export const RangeDate = (props) => {
   const info = props.history[props.sensor_name].info;

   return (
      <>
         <div className={s.rangeDate}>
            <svg
               onClick={props.onOpen}
               className={s.rangeDate__icon}
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  d="M11.5 19.6667H5.66667C4.74167 19.6667 4 18.9167 4 18L4.00833 6.33333C4.00833 5.41667 4.74167 4.66667 5.66667 4.66667H6.5V3H8.16667V4.66667H14.8333V3H16.5V4.66667H17.3333C18.25 4.66667 19 5.41667 19 6.33333V11.3333H17.3333V9.66667H5.66667V18H11.5V19.6667ZM19.9417 15.4917L20.5333 14.9C20.8583 14.575 20.8583 14.05 20.5333 13.725L19.9417 13.1333C19.6167 12.8083 19.0917 12.8083 18.7667 13.1333L18.175 13.725L19.9417 15.4917ZM19.35 16.0833L14.9333 20.5H13.1667V18.7333L17.5833 14.3167L19.35 16.0833Z"
                  fill="#475569"
               />
            </svg>

            <span className={s.rangeDate__date}>
               {info.firstDate} - {info.lastDate}
            </span>
         </div>

         <Settings
            airInfo={props.airInfo}
            info={info}
            quickRange={props.quickRange}
            isCustomRange={props.isCustomRange}
            isVisible={props.isVisible}
            onClose={props.onClose}
            setActiveQuickRange={props.setActiveQuickRange}
         />
      </>
   );
};
