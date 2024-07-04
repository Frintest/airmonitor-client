import { io } from "socket.io-client";

const PORT = 3001;
const WEBSOCKET_URL = `https://airmonitor.servermc.ru:${PORT}`;
const socket = io(WEBSOCKET_URL);

socket.on("connect", () => {
	console.log("Client connected");
});

export const API = {
	getAirState(callback) {
		socket.once("air-state:update", (data, eventConfirm) => {
			eventConfirm();
			callback(data);
			console.log("air-state:update");
		});
	},

	sendHistoryItemName(itemName) {
		socket.emit("history-item:get", itemName);
		console.log("history-item:get");
	},

	updateAirHistory(callback) {
		socket.once("air-history:update", (data, eventConfirm) => {
			eventConfirm();
			callback(data);
			console.log("air-history:update");
		});
	},

	getStandards(callback) {
		socket.once("standards:get", (data, eventConfirm) => {
			eventConfirm();
			callback(data);
			console.log("standards:get");
		});
	},

	sendRangeInfo(info) {
		socket.emit("range-info:send", info);
		console.log("range-info:send");
	},
};
