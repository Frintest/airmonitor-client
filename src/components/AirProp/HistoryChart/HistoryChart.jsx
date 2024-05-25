import React from "react";
import s from "./HistoryChart.module.scss";
import { Chart } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import gradient from "chartjs-plugin-gradient";
import chroma from "chroma-js";

ChartJS.register(...registerables);
ChartJS.register(gradient);

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

   const createPalette = (palette) => {
      const colorRange = chroma.scale(palette).domain([1000, 4000]);
      return colorRange;
   };

   const colors = props.levelColors;

   const level1 = colors["1"];
   const level2 = colors["2"];
   const level3 = colors["3"];
   const level4 = colors["4"];

   const backgroundColors = [level1.light, level2.light, level3.light, level4.light];
   const backgroundPalette = createPalette(backgroundColors);

   const borderColors = [level1.dark, level2.dark, level3.dark, level4.dark];
   const borderPalette = createPalette(borderColors);

   const createChartColors = (dataset) => {
      const backgroundList = {};
      const borderList = {};

      for (let i = 0; i < dataset.length; i++) {
         const value = dataset[i];
         const background = backgroundPalette(value).alpha(0.8).hex();
         const border = borderPalette(value).alpha(0.92).hex();

         backgroundList[i] = background;
         borderList[i] = border;
      }

      return {
         background: backgroundList,
         border: borderList,
      };
   };

   const values = history.map((data) => data.y);

   return (
      <Chart
         type="line"
         data={{
            datasets: [
               {
                  data: history,
                  normalized: true,
                  fill: true,
                  gradient: {
                     backgroundColor: {
                        axis: "x",
                        colors: createChartColors(values).background,
                     },
                     borderColor: {
                        axis: "x",
                        colors: createChartColors(values).border,
                     },
                  },
                  pointBackgroundColor: "#fff",
               },
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
