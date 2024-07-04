import React from "react";
import s from "./AirProp.module.scss";
import { Link, useLocation } from "react-router-dom";
import { formatText } from "../../../utilities/helpers/format-text-airprop.js";
import { Standards } from "./Standards/Standards.jsx";
import { HistoryChart } from "./HistoryChart/HistoryChart.jsx";
import ChartHeaderContainer from "./ChartHeader/ChartHeaderContainer.js";

export const AirProp = (props) => {
   const ref = React.useRef();

   const location = useLocation();
   let path = location.pathname.split("/");
   path = path[path.length - 1];
   const airItem = props.airState[path];
	console.log(props.sendRangeInfoTrigger);
   React.useEffect(() => {
      props.updateAirHistoryThunk(airItem.sensor_name);
   }, [props.airState, props.sendRangeInfoTrigger]);

   const history = props.history[airItem.sensor_name];
   const standards = props.standards[airItem.sensor_name];

   return (
      <section className={s.airprop}>
         <div className={s.header}>
            <div className={s.header__info}>
               <Link to="/devices" className={s.header__exit}>
                  <svg
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M18.9726 10.9501H7.50389L12.5142 5.80608C12.7068 5.60694 12.8148 5.3377 12.8148 5.05708C12.8148 4.77645 12.7068 4.50721 12.5142 4.30808C12.4192 4.21041 12.3065 4.13293 12.1823 4.08007C12.0582 4.02721 11.9251 4 11.7907 4C11.6563 4 11.5232 4.02721 11.399 4.08007C11.2749 4.13293 11.1621 4.21041 11.0671 4.30808L4.30001 11.2571C4.20491 11.3546 4.12946 11.4704 4.07798 11.5979C4.0265 11.7254 4 11.8621 4 12.0001C4 12.1381 4.0265 12.2748 4.07798 12.4022C4.12946 12.5297 4.20491 12.6456 4.30001 12.7431L11.0671 19.6921C11.1622 19.7896 11.2751 19.867 11.3993 19.9198C11.5235 19.9726 11.6566 19.9997 11.791 19.9997C11.9254 19.9996 12.0585 19.9724 12.1827 19.9195C12.3069 19.8667 12.4197 19.7892 12.5147 19.6916C12.6097 19.5939 12.6851 19.478 12.7365 19.3505C12.7879 19.2229 12.8143 19.0863 12.8143 18.9482C12.8142 18.8102 12.7877 18.6735 12.7362 18.546C12.6847 18.4185 12.6093 18.3026 12.5142 18.2051L7.50389 13.0601H18.9726C19.5374 13.0601 20 12.5851 20 12.0051C20 11.4251 19.5374 10.9511 18.9726 10.9511V10.9501Z"
                        fill="#0F172A"
                     />
                  </svg>
               </Link>

               <p className={s.header__title}>{formatText(airItem.ui_name)}</p>
            </div>
         </div>

         <div className={s.info}>
            <div className={s.airprop__container}>
               <div className={s.maininfo}>
                  <div className={s.maininfo__valueWrap}>
                     <p className={s.maininfo__value}>{airItem.value}</p>
                     <span className={s.maininfo__unit}>{formatText(airItem.unit)}</span>
                  </div>

                  <Standards standards={standards} levelColors={props.levelColors} />
               </div>

               <ChartHeaderContainer ref={ref} sensor_name={airItem.sensor_name} />

               {history !== undefined ? (
                  <div className={s.chart}>
                     <HistoryChart
                        history={history.history}
                        sensor_name={airItem.sensor_name}
                        ui_name={airItem.ui_name}
                        updateAirHistoryThunk={props.updateAirHistoryThunk}
                        levelColors={props.levelColors}
                        ref={ref}
                     />
                  </div>
               ) : (
                  "Выберите временной интервал, для отображения графика."
               )}
            </div>
         </div>
      </section>
   );
};
