import { io } from 'socket.io-client';

const PORT = 3001;
const WEBSOCKET_URL = `http://airmonitor.servermc.ru:${PORT}`;
const socket = io(WEBSOCKET_URL);

socket.on('connect', () => {
	console.log('Client connected');
});

export const API = {
	getAirState(callback) {
		socket.once('air-state:update', data => {
			callback(data);
		});
	},
	getAirPropHistory(callback) {
		socket.once('air-history:update', data => {
			callback(data);
		});
	},
};
