import React from "react";
import s from "./RangeDate.module.scss";
import { Settings } from "./Settings/Settings.jsx";

export const RangeDate = (props) => {
   return (
      <>
         <div className={s.rangeDate}>
            <svg
               onClick={props.onOpen}
               className={s.rangeDate__icon}
               width="20"
               height="20"
               viewBox="0 0 20 20"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path d="M9.11157 17.9167H3.27824C2.35324 17.9167 1.61157 17.1667 1.61157 16.25L1.61991 4.58333C1.61991 3.66667 2.35324 2.91667 3.27824 2.91667H4.11157V1.25H5.77824V2.91667H12.4449V1.25H14.1116V2.91667H14.9449C15.8616 2.91667 16.6116 3.66667 16.6116 4.58333V9.58333H14.9449V7.91667H3.27824V16.25H9.11157V17.9167ZM17.5532 13.7417L18.1449 13.15C18.4699 12.825 18.4699 12.3 18.1449 11.975L17.5532 11.3833C17.2282 11.0583 16.7032 11.0583 16.3782 11.3833L15.7866 11.975L17.5532 13.7417ZM16.9616 14.3333L12.5449 18.75H10.7782V16.9833L15.1949 12.5667L16.9616 14.3333Z" />
            </svg>
            <span className={s.rangeDate__date}>
               {"10/21/2024"} - {"11/21/2024"}
            </span>
         </div>

         <Settings isVisible={props.isVisible} onClose={props.onClose} />
      </>
   );
};
