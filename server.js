const express = require("express");
const mysql = require("mysql2");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

(async () => {
	const pool = mysql.createPool({
		host: 'localhost',
		user: 'sensor_user',
		database: 'sensor',
		password: 'jshdf^%hfjDfsbh$',
	}).promise();

	const app = express();
	app.use(cors({
		origin: ['http://localhost:3000', 'http://airmonitor.servermc.ru']
		// origin: 'http://airmonitor.servermc.ru',
		// origin: "*"
		// origin: true
	}));

	const server = http.createServer(app);

	const io = new Server(server, {
		cors: {
			origin: ['http://localhost:3000', 'http://airmonitor.servermc.ru']
			// origin: "*"
			// origin: 'http://airmonitor.servermc.ru'
			// origin: true
		}
	});

	const getHistory = async () => {
		let [initial_data] = await pool.query('SELECT pm2, timestamp FROM Sensor ORDER BY id DESC LIMIT 10');
		let data = initial_data.map((item) => {
			return item.pm2
		});

		return initial_data;
	};

	const getAirState = async () => {
		let [initial_data] = await pool.query(`SELECT * FROM Sensor ORDER BY id DESC LIMIT 1`);
		let data = initial_data[0];

		// <sub> - нижний индекс и <sup> - верхний индекс, обрабатывается на фронтенде
		// функцией format-text-airprop.js в /utilities/helpers/
		return {
			pm1: {
				sensor_name: "pm1",
				ui_name: "pm<sub>1",
				unit: "μg/m<sup>3",
				value: data.pm1,
			},
			pm2: {
				sensor_name: "pm2",
				ui_name: "pm<sub>2.5",
				unit: "μg/m<sup>3",
				value: data.pm2,
			},
			pm10: {
				sensor_name: "pm10",
				ui_name: "pm<sub>10",
				unit: "μg/m<sup>3",
				value: data.pm10,
			},
			temp: {
				sensor_name: "temp",
				ui_name: "Температура",
				unit: "°C",
				value: data.temp,
			},
			humidity: {
				sensor_name: "humidity",
				ui_name: "Влажность",
				unit: "%",
				value: data.humidity,
			},
			CO2: {
				sensor_name: "CO2",
				ui_name: "CO<sub>2",
				unit: "μg/m<sup>3",
				value: data.CO2,
			},
			TVOC: {
				sensor_name: "TVOC",
				ui_name: "TVOC",
				unit: "μg/m<sup>3",
				value: data.TVOC,
			},
		};
	};

	io.on('connection', socket => {
		const getAirStateSocket = async () => {
			const data = await getAirState();
			socket.emit('getAirState', data);
		};

		const getHistorySocket = async () => {
			const data = await getHistory();
			socket.emit('getHistory', data);
		};

		getAirStateSocket();
		getHistorySocket();
		// setInterval(getAirStateSocket, 10000);
		// setInterval(getHistorySocket, 10000);
	});

	server.listen(3001, () => {
		console.log("Server is running...");
	});
})();
