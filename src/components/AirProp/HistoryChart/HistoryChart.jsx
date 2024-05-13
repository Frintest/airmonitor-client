import React from "react";
import s from "./HistoryChart.module.scss";
import { Chart } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";

ChartJS.register(...registerables);

export const HistoryChart = (props) => {
   const getAirPropHistory = () => {
      const data = Object.values(props.history).map((item) => {
         return {
            x: item.timestamp,
            y: item.value,
         };
      });

      return data;
   };

   const history = getAirPropHistory();

   const splitHistory = () => {
      let segmentsHistory = [];
      let currentSegment = {
         array: [history[0]],
         darkColor: "",
         lightColor: "",
      };

      for (let i = 1; i < history.length; i++) {
         const level1 = history[i - 1].y < 1500 && history[i].y < 1500;
         const level2 =
            history[i - 1].y < 2000 &&
            history[i - 1].y >= 1500 &&
            history[i].y < 2000 &&
            history[i].y >= 1500;
         const level3 = history[i - 1].y >= 2000 && history[i].y >= 2000;

         let colors = {};

         if (level1) {
            colors = props.levelColors["1"];
         }
         if (level2) {
            colors = props.levelColors["2"];
         }
         if (level3) {
            colors = props.levelColors["3"];
         }

         let darkColor = colors.dark;
         let lightColor = colors.light;

         if (level1 || level2 || level3) {
            currentSegment.array.push(history[i]);
            currentSegment.darkColor = darkColor;
            currentSegment.lightColor = `${lightColor}66`;
         } else {
            currentSegment.array.push(history[i]); // плавные переходы

            segmentsHistory.push({ ...currentSegment }); // shallow copy

            // create segment
            currentSegment.array = [history[i]];
            currentSegment.darkColor = "";
            currentSegment.lightColor = "";
         }
      }

      segmentsHistory.push(currentSegment);

      return segmentsHistory;
   };

   const segmentsArray = splitHistory();

   const segments = segmentsArray.map((segment) => {
      return {
         data: segment.array,
         normalized: true,
         fill: true,
         borderColor: segment.darkColor,
         backgroundColor: segment.lightColor,
         pointBackgroundColor: "rgba(255, 255, 255, 0.6)",
      };
   });

   // const getGradient = (ctx, chartArea, scales) => {
   //    const gradientBg = ctx.createLinearGradient(chartArea.left, 0, chartArea.right, 0);

   //    const xPointWidth = chartArea.width / scales.x._valueRange;

   //    gradientBg.addColorStop(0, "red");
   //    gradientBg.addColorStop(1, "black");

   //    return gradientBg;
   // };

   return (
      <Chart
         type="line"
         data={{
            datasets: [
               {
                  data: history,
                  normalized: true,
                  // backgroundColor: (context) => {
                  //    const chart = context.chart;
                  //    const { ctx, chartArea, scales } = chart;
                  //    console.log(chart.tooltip);
                  //    if (!chartArea) {
                  //       return null;
                  //    }
                  //    return getGradient(ctx, chartArea, scales);
                  // },
                  pointBackgroundColor: "rgba(255, 255, 255, 0.6)",
               },

               ...segments,
            ],
         }}
         options={{
            animation: false,
            interaction: {
               mode: "index",
               intersect: false,
            },
            plugins: {
               legend: {
                  display: false,
               },
               tooltip: {
                  backgroundColor: "rgba(15, 23, 42, 0.8)",
                  padding: 12,
                  titleFont: {
                     size: 13,
                     family: "Roboto",
                     weight: 700,
                  },
                  bodyFont: {
                     size: 13,
                     family: "Roboto",
                     weight: 400,
                  },
                  callbacks: {
                     label: (context) => `${props.sensor_name}: ${context.parsed.y}`,
                  },
               },
            },
            scales: {
               y: {
                  ticks: {
                     font: {
                        size: 12,
                        family: "Roboto",
                        weight: 700,
                     },
                     color: "#545a67",
                  },
               },
               x: {
                  ticks: {
                     font: {
                        size: 12,
                        family: "Roboto",
                        weight: 700,
                     },
                     color: "#545a67",
                  },
               },
            },
         }}
      />
   );
};
