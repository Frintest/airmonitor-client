import { io } from "socket.io-client";

const PORT = 3001;
let baseURL = "";

if (process.env.NODE_ENV === "development") {
	baseURL = `http://localhost:${PORT}`;
}

if (process.env.NODE_ENV === "production") {
	baseURL = `https://airmonitor.servermc.ru:${PORT}`;
}

const socket = io(baseURL);

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
