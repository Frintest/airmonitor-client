import { io } from 'socket.io-client';

const socket = io("http://airmonitor.servermc.ru");

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
