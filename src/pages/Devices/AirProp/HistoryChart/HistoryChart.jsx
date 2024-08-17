import React from "react";
import s from "./HistoryChart.module.scss";
import { Chart } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import gradientPlugin from "chartjs-plugin-gradient";
import zoomPlugin from "chartjs-plugin-zoom";
import chroma from "chroma-js";

ChartJS.register(...registerables);
ChartJS.register(gradientPlugin);
ChartJS.register(zoomPlugin);

export const HistoryChart = React.forwardRef((props, ref) => {
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

	const backgroundColors = [
		level1.light,
		level2.light,
		level3.light,
		level4.light,
	];
	const backgroundPalette = createPalette(backgroundColors);

	const borderColors = [level1.dark, level2.dark, level3.dark, level4.dark];
	const borderPalette = createPalette(borderColors);

	const createChartColors = (dataset) => {
		const backgroundList = {};
		const borderList = {};

		for (let i = 0; i < dataset.length; i++) {
			const value = dataset[i];
			const background = backgroundPalette(value).alpha(0.75).hex();
			const border = borderPalette(value).hex();

			backgroundList[i] = background;
			borderList[i] = border;
		}

		return {
			background: backgroundList,
			border: borderList,
		};
	};

	const values = history.map((data) => data.y);

	const hoverLine = {
		id: "hoveLine",
		afterDatasetsDraw(chart, args, plugins) {
			const {
				ctx,
				chartArea: { top, bottom, left, right, width, height },
				scales: { x, y },
				tooltip,
			} = chart;

			if (tooltip._active.length > 0) {
				const xCoor = x.getPixelForValue(tooltip.dataPoints[0].dataIndex);
				const yCoor = y.getPixelForValue(tooltip.dataPoints[0].parsed.y);

				// vertical line
				ctx.save();
				ctx.beginPath(); // делает линию независимой (=> вычитает точку)
				ctx.lineWidth = 1;
				ctx.strokeStyle = "rgba(15, 23, 42, 0.6)"; // 0f172a
				ctx.setLineDash([6, 6]); // [черта, пустота]
				ctx.moveTo(xCoor, top);
				ctx.lineTo(xCoor, bottom);
				ctx.stroke();
				ctx.closePath();
				ctx.setLineDash([]); // артефакты left bottom графика

				// horizontal line
				ctx.save();
				ctx.beginPath();
				ctx.lineWidth = 1;
				ctx.strokeStyle = "rgba(15, 23, 42, 0.6)"; // 0f172a
				ctx.setLineDash([6, 6]);
				ctx.moveTo(left, yCoor);
				ctx.lineTo(right, yCoor);
				ctx.stroke();
				ctx.closePath();
				ctx.setLineDash([]);
			}
		},
	};

	const data = {
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
	};

	const options = {
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
				backgroundColor: "rgba(15, 23, 42, 0.8)", // 0f172a
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
			zoom: {
				zoom: {
					wheel: {
						speed: 0.1,
						enabled: true,
					},
					mode: "y",
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
					color: "#475569",
				},
			},
			x: {
				ticks: {
					font: {
						size: 12,
						family: "Roboto",
						weight: 700,
					},
					color: "#475569",
				},
			},
		},
	};

	return (
		<>
			<Chart
				type="line"
				data={data}
				options={options}
				plugins={[hoverLine]}
				ref={ref}
			/>
		</>
	);
});
