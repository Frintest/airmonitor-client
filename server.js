// const express = require("express");
// const mysql = require("mysql2");
// const http = require("http");
// const cors = require("cors");
// const { Server } = require("socket.io");

// (async () => {
// 	const pool = mysql.createPool({
// 		host: 'localhost',
// 		user: 'sensor_user',
// 		database: 'sensor',
// 		password: 'jshdf^%hfjDfsbh$',
// 	}).promise();

// 	const app = express();
// 	app.use(cors({
// 		origin: 'http://localhost:3000' // return, then ending self work
// 		// origin: 'https://airmonitor.servermc.ru'
// 	}));

// 	const server = http.createServer(app);

// 	const io = new Server(server, {
// 		cors: {
// 			origin: 'http://localhost:3000'
// 			// origin: 'https://airmonitor.servermc.ru'
// 		}
// 	});

// 	const getLastNote = async () => {
// 		let [initial_data] = await pool.query(`SELECT * FROM Sensor ORDER BY id DESC LIMIT 1`);
// 		let data = initial_data[0];
// 		const getSubIndex = (text) => {
// 			const formatText = `\u208X`;
// 			return formatText;
// 		};

// 		return [
// 			{
// 				sensor_name: "pm1",
// 				ui_name: "pm1",
// 				unit: "ppm",
// 				value: data.pm1,
// 			},
// 			{
// 				sensor_name: "pm2",
// 				ui_name: "pm2.5",
// 				unit: "ppm",
// 				value: data.pm2,
// 			},
// 			{
// 				sensor_name: "pm10",
// 				ui_name: "pm10",
// 				unit: "ppm",
// 				value: data.pm10,
// 			},
// 			{
// 				sensor_name: "temp",
// 				ui_name: "Температура",
// 				unit: "°C",
// 				value: data.temp,
// 			},
// 			{
// 				sensor_name: "humidity",
// 				ui_name: "Влажность",
// 				unit: "%",
// 				value: data.humidity,
// 			},
// 			{
// 				sensor_name: "CO2",
// 				ui_name: `CO${getSubIndex('2')}C`,
// 				unit: "ppm",
// 				value: data.CO2,
// 			},
// 			{
// 				sensor_name: "TVOC",
// 				ui_name: "TVOC",
// 				unit: "mg/m³",
// 				value: data.TVOC,
// 			},
// 		];
// 	};

// 	io.on('connection', socket => {
// 		const getData = async () => {
// 			const data = await getLastNote();
// 			socket.emit('getAirState', data);
// 		};

// 		getData();
// 		setInterval(getData, 3000);
// 	});

// 	server.listen(3001, () => {
// 		console.log("Server is running...");
// 	});
// })();
