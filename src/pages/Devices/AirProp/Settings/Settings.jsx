import React from "react";
import s from "./Settings.module.scss";
import { ResetZoom } from "./ResetZoom/ResetZoom.jsx";
import { UpdateData } from "../../UpdateData/UpdateData.jsx";

export const Settings = React.forwardRef((props, ref) => {
   return (
      <div className={s.settings}>
         <UpdateData textColor="#020617" timeColor="#475569" />

         <div>
            <ResetZoom ref={ref} />
         </div>
      </div>
   );
});
