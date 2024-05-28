import { io } from "socket.io-client";

const PORT = 3001;
const WEBSOCKET_URL = `http://airmonitor.servermc.ru:${PORT}`;
const socket = io(WEBSOCKET_URL);

socket.on("connect", () => {
	console.log("Client connected");
});

export const API = {
	getAirState(callback) {
		socket.once("air-state:update", data => {
			callback(data);
			console.log("air-state:update");
		});
	},

	updateAirHistory(callback) {
		socket.once("air-history:update", data => {
			callback(data);
			console.log("air-history:update");
		});
	},

	sendHistoryItemName(itemName) {
		socket.emit("history-item:get", itemName);
		console.log("history-item:get");
	},
};
