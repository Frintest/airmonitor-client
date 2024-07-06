import React from "react";
import Calendar from "react-calendar";
import s from "./DatePicker.module.scss";
import "./Calendar.scss";
import moment from "moment";

const PreviousIcon = () => {
   return (
      <svg
         width="24"
         height="24"
         viewBox="0 0 24 24"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <path
            d="M7.44185 11.6292C7.68593 11.3851 8.08165 11.3851 8.32573 11.6292L14.5129 17.8164C14.757 18.0605 14.757 18.4562 14.5129 18.7003V18.7003C14.2688 18.9443 13.8731 18.9443 13.629 18.7003L7.44185 12.5131C7.19777 12.269 7.19777 11.8733 7.44185 11.6292V11.6292Z"
            fill="#475569"
         />
         <path
            d="M14.5129 5.44197C14.757 5.68605 14.757 6.08178 14.5129 6.32585L8.32571 12.513C8.08163 12.7571 7.6859 12.7571 7.44183 12.513V12.513C7.19775 12.269 7.19775 11.8732 7.44183 11.6292L13.629 5.44197C13.8731 5.19789 14.2688 5.19789 14.5129 5.44197V5.44197Z"
            fill="#475569"
         />
      </svg>
   );
};

const NextIcon = () => {
   return (
      <svg
         width="24"
         height="24"
         viewBox="0 0 24 24"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <path
            d="M16.5582 12.3708C16.3141 12.6149 15.9183 12.6149 15.6743 12.3708L9.48709 6.18362C9.24301 5.93954 9.24301 5.54381 9.48709 5.29974V5.29974C9.73116 5.05566 10.1269 5.05566 10.371 5.29974L16.5582 11.4869C16.8022 11.731 16.8022 12.1267 16.5582 12.3708V12.3708Z"
            fill="#475569"
         />
         <path
            d="M9.48711 18.558C9.24303 18.314 9.24303 17.9182 9.48711 17.6741L15.6743 11.487C15.9184 11.2429 16.3141 11.2429 16.5582 11.487V11.487C16.8023 11.731 16.8023 12.1268 16.5582 12.3708L10.371 18.558C10.1269 18.8021 9.73119 18.8021 9.48711 18.558V18.558Z"
            fill="#475569"
         />
      </svg>
   );
};

export const DatePicker = (props) => {
   return (
      <div className={s.datePicker}>
         <Calendar
            locale="ru"
            formatMonthYear={(locale, date) => {
               moment.locale(locale);
               return moment(date).format("MMMM YYYY");
            }}
            minDate={new Date(props.airInfo.firstDate)}
            maxDate={new Date(props.airInfo.lastDate)}
            minDetail="year"
            prev2Label={null}
            next2Label={null}
            prevLabel={<PreviousIcon />}
            nextLabel={<NextIcon />}
         />

         {/* <label className={s.textPicker}>
            <span className={s.textPicker__subtitle}>{props.textPicker}</span>
            <input type="text" className={s.textPicker__input} placeholder={props.date} />
         </label> */}
      </div>
   );
};
