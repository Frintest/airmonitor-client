import React from "react";
import s from "./HistoryChart.module.scss";
import * as d3 from "d3";

export const HistoryChart = (props) => {
   const svgRef = React.useRef();

   const width = 1000;
   const height = 500;

   React.useEffect(() => {
      const history = props.history;

      // console.log(history);

      // Calc x, y max values

      // let xMinValue = history[0].timestamp;
      // let xMaxValue = history[history.length - 1].timestamp;
      // let yMinValue = Math.min(...history.map((entry) => entry.value));
      // let yMaxValue = Math.max(...history.map((entry) => entry.value));

      // console.log(`xMinValue: ${xMinValue}`);
      // console.log(`xMaxValue: ${xMaxValue}`);
      // console.log(`yMinValue: ${yMinValue}`);
      // console.log(`yMaxValue: ${yMaxValue}`);

      const e = history.map((entry) => entry.timestamp);
      console.log(e);
		const q = [0, 1, 2, 3];
		const q2 = [10, 20, 30, 40];


      // Add chart area
      const margin = { top: 20, right: 40, bottom: 100, left: 40 };

      const svg = d3
         .select(svgRef.current)
         .attr("width", width)
         .attr("height", height + margin.top + margin.bottom)
         // .style("background", "#d3d3d3")
         .append("g")
         .attr("transform", `translate(${margin.left}, ${margin.top})`);

      // Add scale for axis
      const x = d3.scaleLinear(q).range([0, width]);
      const y = d3.scaleLinear(q2).range([height, 0]);

      // x.domain(d3.extent(history, (d) => new Date(d.timestamp)));
      // x.domain(q);
      // y.domain(q2);

      // y.domain(d3.extent(history, (d) => d.value));

      // Create x-grid
      svg.append("g")
         .attr("transform", `translate(0, ${height})`)
         .call(
            d3
               .axisBottom(x)
               // .tickFormat(d3.timeFormat("%Y-%m-%d %H:%M:%S"))
               .tickPadding(10)
               .tickSizeOuter(0)
         )
         .selectAll("text")
         .style("text-anchor", "end") // Устанавливаем якорь текста
         .attr("dx", "-.8em") // Сдвигаем текст влево
         .attr("dy", ".15em") // Сдвигаем текст вниз
         .attr("transform", "rotate(-45)"); // Поворачиваем текст на 45 градусов влево;

      // Create y-grid
      svg.append("g").call(d3.axisLeft(y));
   }, [props.history]);

   return <svg ref={svgRef}></svg>;
};
