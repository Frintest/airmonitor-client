// import axios from "axios";

// const instance = axios.create({
// 	baseURL: "https://airmonitor.servermc.ru",
// });

// export const API = {
// 	getState() {
// 		let data = null;
// 		setInterval(() => {
// 			data = instance.get("/note").then((response) => response.data);
// 		}, 2000);
// 		return data;
// 	},
// };

import { io } from 'socket.io-client';

const socket = io("https://airmonitor.servermc.ru");

socket.on('connect', () => {
	console.log('Connect socket...');
});

export const API = {
	getState(callback) {
		socket.on('getAirState', data => {
			callback(data);
		});
	},
};