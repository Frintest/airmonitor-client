import React from "react";
import s from "./HistoryChart.module.scss";
import { Chart } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";

ChartJS.register(...registerables);

export const HistoryChart = (props) => {
   const getAirPropHistory = () => {
      const history = props.history[props.name];

      const data = Object.values(history).map((item) => {
         return {
            x: item.timestamp,
            y: item.value,
         };
      });

      return data;
   };

   return (
      <Chart
         type="line"
         data={{
            datasets: [
               {
                  id: 1,
                  label: props.name,
                  data: getAirPropHistory(),
               },
            ],
         }}
      />
   );
};
