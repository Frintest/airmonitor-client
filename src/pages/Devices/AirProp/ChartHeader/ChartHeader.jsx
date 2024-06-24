import React from "react";
import s from "./ChartHeader.module.scss";
import { UpdateData } from "../../UpdateData/UpdateData.jsx";
import { RangeDate } from "./RangeDate/RangeDate.jsx";
import { ResetZoom } from "./ResetZoom/ResetZoom.jsx";

export const ChartHeader = React.forwardRef((props, ref) => {
   const [isVisible, setVisible] = React.useState(false);

   return (
      <div className={s.chartHeader}>
         <UpdateData textColor="#020617" timeColor="#475569" />

         <div className={s.chartHeader__settings}>
            <RangeDate
               isVisible={isVisible}
               onClose={() => setVisible(false)}
               onOpen={() => setVisible(true)}
            />
            <ResetZoom ref={ref} />
         </div>
      </div>
   );
});
