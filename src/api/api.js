import { io } from 'socket.io-client';

const socket = io("https://airmonitor.servermc.ru");

socket.on('connect', () => {
	console.log('Connect socket...');
});

export const API = {
	getState(callback) {
		socket.on('111', data => {
			callback(data);
		});
	},
};
