import React from "react";
import s from "./HistoryChart.module.scss";
import { Chart } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
ChartJS.register(...registerables);

export const HistoryChart = (props) => {
   const getAirPropHistory = () => {
      const data = props.history[props.name].map((el) => ({
         x: `${new Date(el.timestamp).toISOString().split("T")[0]} ${
            new Date(el.timestamp).toISOString().split("T")[1].split(".")[0]
         }`,
         y: el.pm2,
      }));

      const dataReverse = data.reverse();
      return dataReverse;
   };

   return (
      <Chart
         type="line"
         data={{
            // labels: { ...getAirPropHistory() }.datasets,
            datasets: [
               {
                  id: 1,
                  label: "pm2.5",
                  data: getAirPropHistory(),
               },
            ],
         }}
      />
      // <Chart
      //    type="line"
      //    data={{
      //       datasets: [
      //          {
      //             data: [
      //                {
      //                   x: "2021-11-06 23:39:30",
      //                   y: 50,
      //                },
      //                {
      //                   x: "2021-11-07 01:00:28",
      //                   y: 60,
      //                },
      //                {
      //                   x: "2021-11-07 09:00:28",
      //                   y: 20,
      //                },
      //             ],
      //          },
      //       ],
      //    }}
      //    options={{
      //       scales: {
      //          x: {
      //             min: "2021-11-07 00:00:00",
      //          },
      //       },
      //    }}
      // />
   );
};
